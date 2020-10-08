import React from 'react'
import { Card, Grid, Text, Box } from 'theme-ui'
import GithubIcon from "../images/icons/github.inline.svg"
import CodeIcon from "../images/icons/code.inline.svg"
import IssueIcon from "../images/icons/issue.inline.svg"
import StarIcon from "../images/icons/star.inline.svg"
import {languageLogoList} from "../data/languageLogoList.js"
import './layout.css'
const openGithubPage = (githubLink) => {
  window.open(githubLink, '_blank');
};

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
        <Text><span class="tooltip" role="img" aria-label="issues" style={{ verticalAlign: 'middle' }}>
          <IssueIcon />
          <span class="tooltiptext">Open Issues</span>
        </span> {repo.open_issues_count}</Text>
        <a href={repo.html_url} style={{ color: 'currentColor' }}>
          <Text><span role="img" aria-label="github" style={{ verticalAlign: 'middle' }}>
            <GithubIcon />
          </span> Github</Text>
        </a>
        <Text>
          <span class="tooltip" role="img" aria-label="language" style={{ verticalAlign: 'middle' }}>
          {displayLogo()}{checkNullLang()}            
          </span>
        </Text>
      </Grid>
    </Card>
  )
  function displayLogo()
  { 
    if(languageLogoList.includes(repo.language))
    {
      var langLogo='https://raw.githubusercontent.com/aj-ya/github-covid-finder/pr/add_logos/src/images/icons/languages/'+repo.language.replace(/\s+/g,"_")+'.svg?sanitize=true';//loading the image form github and not local files.replace function to replace one or more whitespaces with a single underscore
      return(<img width="16px" height="16px" src={langLogo} alt={repo.language} />)
      //var langLogo='../images/icons/languages/'+repo.language.replace(/\s+/g,"_")+'.svg';
      //return(<img width="16px" height="16px" src={require(langLogo)} alt={repo.language} />)
      //require() fails when a dynamic path is passed.
      //possible solution at  https://stackoverflow.com/questions/52109907/react-require-error-cannot-find-module 
      //couldnt quite work it out 
    }
    else
    {
      return (<CodeIcon />)
    }
  }

  function checkNullLang()
  {
    if(repo.language!==null)
      return(<span class="tooltiptext">{repo.language}</span>)
  }
}
export default RepoCard

