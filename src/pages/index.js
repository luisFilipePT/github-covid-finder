import React, { useEffect, useReducer, useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from 'theme-ui'
import Layout from '../components/layout'
import RepoCard from '../components/repoCard'
import Search from '../components/search'
import mockRepos from '../mocks/mockRepos'
import Pagination from '../components/pagination'

const URL = 'https://api.github.com/search/repositories?q=covid'
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
    query += `+language:${searchState.filter}`
  }

  if (searchState.sort !== '') {
    query += `&sort=${searchState.sort}`
  }

  return `${query}&per_page=30&page=${searchState.page}`
}

const Index = () => {
  const refSearch = useRef(null);
  const [repos, setRepos] = useState(null)
  const [totalResults, setTotalResults] = useState(null)
  const [searchState, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}${buildSearchQuery(searchState)}`)
        let data = await response.json()

        setRepos(data)
        setTotalResults(data.total_count)
      } catch (e) {
        console.log('error', e)
      }
    }
    // Avoid request while developing
    process.env.NODE_ENV === 'development' ? setRepos(mockRepos) : fetchData()
  }, [searchState])

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

  if (!repos) return null

  return (
    <Layout>
      <Helmet>
        <title>Committed | Home</title>
        <meta
          name="description"
          content="Finder for repos on GitHub related to Corona"
        />
      </Helmet>
      <span ref={refSearch}/>
      <Search
        onSearchChange={onSearchChange('search')}
        onSortChange={onSearchChange('sort')}
        onFilterChange={onSearchChange('filter')}
      />
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
    </Layout>
  )
}

export default Index
