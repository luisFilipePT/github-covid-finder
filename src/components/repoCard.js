import React from 'react'
import { Card, Grid, Text, Box } from 'theme-ui'
import CodeIcon from '../images/icons/code.inline.svg'
import GithubIcon from '../images/icons/github.inline.svg'
import IssueIcon from '../images/icons/issue.inline.svg'
import StarIcon from '../images/icons/star.inline.svg'
import { logoMapper } from '../data/languageLogoList.js'

const openGithubPage = githubLink => {
  window.open(githubLink, '_blank')
}

const RepoCard = ({ repo }) => {
  return (
    <Card
      sx={{
        backgroundColor: 'cardBackground',
        fontFamily: 'inter',
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'cardBorder',
        padding: '15px 15px 25px 20px',
        ':hover': {
          cursor: 'pointer',
        },
      }}
      onClick={() => openGithubPage(repo.html_url)}
    >
      <Box
        sx={{
          paddingBottom: 25,
          height: '80%',
        }}
      >
        <Text sx={{ wordBreak: 'break-all', fontSize: 20, py: '8px' }}>
          {repo.name}
        </Text>
        <Text
          sx={{
            wordBreak: 'break-all',
            fontSize: 16,
            py: '4px',
            color: '#9d1e1e',
          }}
        >
          {repo.full_name}
        </Text>
        <Text
          sx={{ pt: '4px', color: '#805f5f', lineHeight: '20px', fontSize: 14 }}
        >
          {repo.description}
        </Text>
      </Box>
      <Grid
        columns={4}
        sx={{
          borderTop: 'solid 1px rgba(255, 255, 255, 0.05)',
          paddingTop: 15,
          textAlign: 'center',
          fontSize: 14,
        }}
      >
        <Text>
          <span
            role="img"
            aria-label="star"
            style={{ verticalAlign: 'middle' }}
          >
            <StarIcon />
          </span>{' '}
          {repo.stargazers_count}
        </Text>
        <Text>
          <span
            role="img"
            aria-label="issues"
            style={{ verticalAlign: 'middle' }}
          >
            <IssueIcon />
          </span>{' '}
          {repo.open_issues_count}
        </Text>
        <a href={repo.html_url} style={{ color: 'currentColor' }}>
          <Text>
            <span
              role="img"
              aria-label="github"
              style={{ verticalAlign: 'middle' }}
            >
              <GithubIcon />
            </span>{' '}
            Github
          </Text>
        </a>
        {displayLogo()}
      </Grid>
    </Card>
  )

  function displayLogo() {
    //check if logoMapper contains the repo.language as a key
    if (logoMapper[repo.language] !== undefined) {
      return (
        <Text>
          <span
            className="tooltip"
            role="img"
            aria-label="language"
            style={{ verticalAlign: 'middle' }}
          >
            <img
              width="16px"
              height="16px"
              src={logoMapper[repo.language]}
              alt={repo.language}
            />
            {checkNullLang()}
          </span>
        </Text>
      ) //checkNullLang() for tool tip visibility.
    }
    //when either repo.language is null or not in logoMapper just displaying code icon with repo.language with no tooltip
    else {
      return (
        <Text>
          <span
            role="img"
            aria-label="code"
            style={{ verticalAlign: 'middle' }}
          >
            <CodeIcon />
          </span>{' '}
          {repo.language}
        </Text>
      )
    }
  }

  function checkNullLang() {
    if (repo.language !== null)
      return <span className="tooltiptext">{repo.language}</span>
  }
}
export default RepoCard
