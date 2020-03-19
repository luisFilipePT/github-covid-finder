import React from 'react'
import { Box, Input, Grid, Select, Label } from 'theme-ui'

import { githubLanguages } from '../data/githubLanguages'

const Search = ({ onSearchChange, onSortChange, onFilterChange }) => {
  return (
    <>
      <Box
        sx={{
          width: '80vw',
          color: 'white',
          fontFamily: 'inter',
          mb: '30px',
        }}
      >
        <Input
          sx={{
            backgroundColor: '#313131',
            border: 'solid 1px #FF4136',
            borderRadius: 5,
            height: 45,
            fontSize: 26,
          }}
          onKeyPress={e => (e.key === 'Enter' ? onSearchChange(e) : {})}
          placeholder="Search Covid-19 related repos"
        />
        <Label
          sx={{
            fontSize: 12,
            mt: '10px',
          }}
        >
          Press Enter when you are done (GitHub API has a rate limit of<b>&nbsp; 10
          requests per minute </b> &nbsp;if something not working please wait...)
        </Label>
      </Box>
      <Grid
        columns={[1, 2]}
        sx={{
          width: '100%',
          color: 'white',
          fontFamily: 'inter',
          mb: '15px',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#313131',
            borderRadius: 3,
            padding: '0 15px 0 20px',
          }}
        >
          <Select defaultValue="stars" onChange={e => onSortChange(e)}>
            <option value="stars">Sort by Stars</option>
            <option value="">Sort by Best Match</option>
            <option value="help-wanted-issues">
              Sort by Help Wanted Issues
            </option>
          </Select>
        </Box>
        <Box
          sx={{
            backgroundColor: '#313131',
            borderRadius: 3,
            padding: '0 15px 0 20px',
          }}
        >
          <Select defaultValue="" onChange={e => onFilterChange(e)}>
            <option value="">All Languages</option>
            {githubLanguages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
          </Select>
        </Box>
      </Grid>
    </>
  )
}

export default Search
