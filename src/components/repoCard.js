import React from 'react'
import { Card, Grid, Text, Box } from 'theme-ui'
import CodeIcon from "../images/icons/code.inline.svg"
import GithubIcon from "../images/icons/github.inline.svg"
import IssueIcon from "../images/icons/issue.inline.svg"
import StarIcon from "../images/icons/star.inline.svg"

const openGithubPage = (githubLink) => {
  window.open(githubLink, '_blank');
};

const RepoCard = ({ repo }) => {
  return (
    <Card
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: '#d2d2d2',
        fontFamily: 'inter',
        borderRadius: 3,
        padding: '15px 15px 25px 20px',
        //margin: 15,
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
        <Text sx={{ fontSize: 18, py: '8px', color: '#9d1e1e' }}>
          {repo.full_name}
        </Text>
        <Text sx={{ pt: '4px', color: '#805f5f' }}>{repo.description}</Text>
      </Box>
      <Grid
        columns={4}
        sx={{
          borderTop: 'solid 1px rgba(255, 255, 255, 0.05)',
          paddingTop: 15,
          textAlign: 'center',
        }}
      >
        <Text><span role="img" aria-label="star" style={{ verticalAlign: 'middle' }}>
          <StarIcon />
        </span> {repo.stargazers_count}</Text>
        <Text><span role="img" aria-label="issues" style={{ verticalAlign: 'middle' }}>
          <IssueIcon />
        </span> {repo.open_issues_count}</Text>
        <a href={repo.html_url} style={{ color: 'currentColor' }}>
          <Text><span role="img" aria-label="github" style={{ verticalAlign: 'middle' }}>
            <GithubIcon />
          </span> Github</Text>
        </a>
        <Text><span role="img" aria-label="code" style={{ verticalAlign: 'middle' }}>
          <CodeIcon />
        </span> {repo.language}</Text>
      </Grid>
    </Card>
  )
}

export default RepoCard
