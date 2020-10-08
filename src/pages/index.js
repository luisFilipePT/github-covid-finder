import React, { useEffect, useReducer, useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { Grid, Spinner, Button, Flex } from 'theme-ui'

import * as githubApi from '../api/github'
import Layout from '../components/layout'
import RepoCard from '../components/repoCard'
import mockRepos from '../mocks/mockRepos'
import Pagination from '../components/pagination'
import Search from '../components/search'

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
  const refSearch = useRef(null);
  const [repos, setRepos] = useState(null)
  const [totalResults, setTotalResults] = useState(null)
  const [isFetchingData, setIsFetchingData] = useState(true)
  const [isShowModal, setIsShowModal] = useState(false)
  const [searchState, dispatch] = useReducer(reducer, INITIAL_STATE)

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
        <Helmet>
          <title>Committed | Home</title>
          <meta
            name="description"
            content="Finder for repos on GitHub related to Corona"
          />
        </Helmet>
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
          : <>
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
        }
      </Layout>
      <Flex
        id="modal"
        className={isShowModal ? 'active' : null}
      >
        <Flex
          p="16px"
          bg="rgb(64,64,64,0.9)"
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
          >
            Close
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

export default Index
