import React, { useEffect, useReducer, useState, useRef } from 'react'
import { Grid, Spinner, Button, Flex, useColorMode, Box, Text } from 'theme-ui'

import * as githubApi from '../api/github'
import Layout from '../components/layout'
import RepoCard from '../components/repoCard'
import mockRepos from '../mocks/mockRepos'
import Pagination from '../components/pagination'
import SEO from '../components/SEO'
import Search from '../components/search'
import { usePrevious } from '../hooks/usePrevious'

import '../styles/main.css'

const INITIAL_STATE = {
  term: '',
  sort: 'stars',
  filter: '',
  page: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'search':
      return { ...state, term: action.payload, page: 1 }
    case 'sort':
      return { ...state, sort: action.payload, page: 1 }
    case 'filter':
      return { ...state, filter: action.payload, page: 1 }
    case 'reset':
      return INITIAL_STATE
    case 'pageUp':
      return { ...state, page: action.payload }
    case 'pageDown':
      return { ...state, page: action.payload }
    default:
      return INITIAL_STATE
  }
}

const buildSearchQuery = searchState => {
  let query = ''

  if (searchState.term !== '') {
    query += `+${searchState.term}`
  }

  if (searchState.filter !== '') {
    const languageFilter =
      searchState.filter === 'C / C++'
        ? searchState.filter.replace('C / C++', 'C%2FC++')
        : searchState.filter

    query += `+language:${languageFilter}`
  }

  if (searchState.sort !== '') {
    query += `&sort=${searchState.sort}`
  }

  return `${query}&per_page=30&page=${searchState.page}`
}

function fetchData(searchState) {
  return githubApi.searchCovidRelatedRepositories(buildSearchQuery(searchState))
}

const Index = () => {
  const refSearch = useRef(null)
  const [repos, setRepos] = useState(null)
  const [totalResults, setTotalResults] = useState(null)
  const [isFetchingData, setIsFetchingData] = useState(true)
  const [isShowModal, setIsShowModal] = useState(false)
  const [searchState, dispatch] = useReducer(reducer, INITIAL_STATE)
  const previousSearchState = usePrevious({ ...searchState })
  const [colorMode, _setColorMode] = useColorMode()

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData(searchState)

      if (data) {
        setRepos(data)
        setTotalResults(data.total_count)
      }

      setIsFetchingData(false)
    }
    // Avoid request while developing
    if (process.env.NODE_ENV === 'development') {
      setRepos(mockRepos)
      setIsFetchingData(false)
      return
    }

    fetchDataAndSetState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSearchChange = field => e => {
    if (searchState.page * 30 < totalResults && field === 'pageUp') {
      dispatch({ type: field, payload: searchState.page + 1 })
      refSearch.current.scrollIntoView()
      return
    }

    if (searchState.page > 1 && field === 'pageDown') {
      dispatch({ type: field, payload: searchState.page - 1 })
      refSearch.current.scrollIntoView()
      return
    }

    dispatch({ type: field, payload: e.target.value })
  }

  const onSearchIconClick = async () => {
    if (
      previousSearchState.term === searchState.term &&
      previousSearchState.sort === searchState.sort &&
      previousSearchState.filter === searchState.filter
    ) {
      return
    }

    setIsFetchingData(true)

    if (isShowModal) {
      setIsShowModal(false)
    }

    const data = await fetchData(searchState)

    if (data) {
      setRepos(data)
      setTotalResults(data.total_count)
    }

    setIsFetchingData(false)
  }

  const toggleModal = () => {
    setIsShowModal(!isShowModal)
  }

  if (!repos) return null

  const searchCompProps = {
    searchState,
    onSearchIconClick,
    onSortChange: onSearchChange('sort'),
    onSearchChange: onSearchChange('search'),
    onFilterChange: onSearchChange('filter'),
  }

  return (
    <>
      <Layout
        isShowSearch
        isShowModal={isShowModal}
        toggleModal={toggleModal}
        searchCompProps={searchCompProps}
      >
        <SEO/>
        <span ref={refSearch}/>
        { isFetchingData
          ? <Spinner
              color="rgb(255, 65, 54)"
              sx={{
                top: '50%',
                left: '50%',
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
              }}
            />
          : repos.items.length > 0
              ? <>
                  <Grid columns={[1, 1, 1, 3]}>
                    {repos.items.map(repo => (
                      <RepoCard key={repo.id} repo={repo} />
                    ))}
                  </Grid>
                  <Pagination
                    pageUp={onSearchChange('pageUp')}
                    pageDown={onSearchChange('pageDown')}
                    currentPage={searchState.page}
                    totalResults={totalResults}
                  />
                </>
              : <Box
                  sx={{
                    top: '50%',
                    left: '50%',
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Text
                    sx={{
                      fontSize: 22,
                      fontFamily: 'inter',
                    }}
                  >
                    No result found
                  </Text>
                </Box>
        }
      </Layout>
      <Flex
        id="modal"
        className={isShowModal ? 'active' : null}
      >
        <Flex
          p="16px"
          bg={colorMode === 'dark' ? 'rgba(64,64,64,0.9)' : 'rgba(255,255,255,0.7)'}
          sx={{
            maxWidth: 660,
            margin: 'auto',
            borderRadius: 6,
            alignItems: 'flex-end',
            flexDirection: 'column',
            '@media only screen and (max-width: 425px)': {
              width: 360,
            },
            '@media only screen and (max-width: 320px)': {
              width: 300,
            },
          }}
        >
          <Search {...searchCompProps}/>
          <Button
            mt="8px"
            backgroundColor="rgb(186, 65, 54)"
            onClick={toggleModal}
            sx={{
              fontFamily: 'inter',
            }}
          >
            Close
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

export default Index
