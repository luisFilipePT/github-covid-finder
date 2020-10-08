import React from 'react'
import { Box, Input, Grid, Select, Label } from 'theme-ui'
import SearchIcon from "../images/icons/search.inline.svg"

import { githubLanguages } from '../data/githubLanguages'

const Search = ({
  searchState,
  onSearchChange,
  onSortChange,
  onFilterChange,
  onSearchIconClick,
}) => {
  return (
    <Grid
      columns={[1, 2]}
    >
      <Box
        sx={{
          width: '100%',
          color: 'text',
          fontFamily: 'inter',
          position: 'relative',
        }}
      >
        <Input
          sx={{
            backgroundColor: 'cardBackground',
            color: 'text',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'cardBorder',
            borderRadius: 8,
            height: 45,
            fontSize: 15,
            pr: '40px',
            '&:focus': {
              outline: 0
            },
            '@media only screen and (max-width: 320px)': {
              fontSize: 13,
            },
          }}
          value={searchState.term}
          onChange={onSearchChange}
          onKeyPress={e => (e.key === 'Enter' ? onSearchIconClick() : {})}
          placeholder="Search Covid-19 related repos"
        />

        <SearchIcon
          style={{
            top: 10,
            right: 10,
            width: 22,
            height: 22,
            cursor: 'pointer',
            position: 'absolute',
          }}
          onClick={onSearchIconClick}
        />

        <Label
          sx={{
            fontSize: 9,
            padding: '0px 3px',
            display: 'block',
            mt: '8px',
            opacity: '0.6'
          }}
        >
          Press Enter when you are done (GitHub API has a rate limit of<a style={{ cursor: 'pointer', color: 'rgb(255, 65, 54)' }} href="https://developer.github.com/v3/search/#rate-limit" target="_blank" rel="noopener noreferrer"><b>&nbsp; 10
          requests per minute </b> &nbsp;</a>if something not working please wait...)
        </Label>
      </Box>
      <Grid
        columns={[2, 2]}
        sx={{
          width: '100%',
          color: 'white',
          fontFamily: 'inter',
        }}
      >
        <Box>
          <Select
            sx={{
              backgroundColor: 'cardBackground',
              color: 'text',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'cardBorder',
              borderRadius: 8,
              height: 45,
              '& + svg': {
                fill: 'text',
              },
              fontSize: 15,
              '@media only screen and (max-width: 320px)': {
                fontSize: 13,
              },
              '&:focus': {
                outline: 0
              },
            }}
            value={searchState.sort}
            onChange={e => onSortChange(e)}
          >
            <option value="stars">Sort by Stars</option>
            <option value="">Sort by Best Match</option>
            <option value="help-wanted-issues">
              Sort by Help Wanted Issues
            </option>
          </Select>
        </Box>
        <Box>
          <Select
            sx={{
              backgroundColor: 'cardBackground',
              color: 'text',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'cardBorder',
              borderRadius: 8,
              height: 45,
              '& + svg': {
                fill: 'text',
              },
              fontSize: 15,
              '@media only screen and (max-width: 320px)': {
                fontSize: 13,
              },
              '&:focus': {
                outline: 0
              },
            }}
            value={searchState.filter}
            onChange={e => onFilterChange(e)}
          >
            <option value="">All Languages</option>
            {githubLanguages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
          </Select>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Search
