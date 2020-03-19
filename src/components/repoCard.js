import React from 'react'
import { Card, Grid, Text, Box } from 'theme-ui'

const openGithubPage = (githubLink) => {
  window.open(githubLink, '_blank');
};

const RepoCard = ({ repo }) => {
  return (
    <Card
      sx={{
        backgroundColor: 'rgb(29, 29, 43)',
        color: 'white',
        fontFamily: 'inter',
        borderRadius: 3,
        padding: '15px 15px 25px 20px',
        margin: 15,
        boxShadow: '0 1px 1rem rgba(10, 10, 25, 0.3)',
        ':hover': {
          cursor: 'pointer'
        }
      }}
      onClick={() => openGithubPage(repo.html_url)}
    >
      <Box
        sx={{
          paddingBottom: 25,
          height: '80%',
        }}
      >
        <Text sx={{ fontSize: 22, py: '8px', fontWeight: 'bold' }}>
          {repo.name}
        </Text>
        <Text sx={{ fontSize: 18, py: '8px', color: '#a6aad1' }}>
          {repo.full_name}
        </Text>
        <Text sx={{ pt: '4px', color: '#5f5f80' }}>{repo.description}</Text>
      </Box>
      <Grid
        columns={4}
        sx={{
          borderTop: 'solid 1px rgba(255, 255, 255, 0.05)',
          paddingTop: 15,
          textAlign: 'center',
        }}
      >
        <Text><span role="img" aria-label="star">⭐️</span> {repo.stargazers_count}</Text>
        <Text><span role="img" aria-label="open hands">👐</span> {repo.open_issues_count}</Text>
        <a href={repo.html_url}><span role="img" aria-label="star">🌍</span>github</a>
        <Text>{repo.language}</Text>
      </Grid>
    </Card>
  )
}

export default RepoCard
