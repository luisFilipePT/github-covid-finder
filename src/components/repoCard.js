import React from 'react'
import { Card, Grid, Text, Box } from 'theme-ui'
import GithubIcon from "../images/icons/github.inline.svg"
import CodeIcon from "../images/icons/code.inline.svg"
import IssueIcon from "../images/icons/issue.inline.svg"
import StarIcon from "../images/icons/star.inline.svg"
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
          {naiveCheckLang()}{checkNullLang()}            
          </span>
        </Text>
      </Grid>
    </Card>
  )
  function checkNullLang()
  {
    if(repo.language!=null)
      return(<span class="tooltiptext">{repo.language}</span>)
  }
  /*Naive Check Language function to siplay icons of programming languages*/
  //ineffeciant and some possible changes needed
  // switch implementation?
  // b/w logos for better ui?
  function naiveCheckLang()
  {
    if(repo.language==='Abap')
    {
    return(
      <img width="16px" height="16px" src={require("../images/icons/languages/Abap.png")} alt="Abap"/>
        )
    } 
    else if(repo.language==='Ada')
    {
    return(
      <img width="16px" height="16px" src={require("../images/icons/languages/Ada.png")} alt="Ada"/>
           )
    }
    else if(repo.language==='C'||repo.language==='C++')
    {
    return(
       <img width="16px" height="16px" src={require("../images/icons/languages/Cpp.svg")} alt="C/C++"/>
         )
    }
    else if(repo.language==='Cobol')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Cobol.png")} alt="Cobol"/>
       )
    }
    else if(repo.language==='C#')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Csharp.svg")} alt="C#"/>
     )
    }
    else if(repo.language==='Dart')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Dart.svg")} alt="Dart"/>
    )
    }
    else if(repo.language==='Delphi')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Delphi.png")} alt="Delphi"/>
    )
    }    
    else if(repo.language==='Go')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Go.png")} alt="Go"/>
    )
    }
    else if(repo.language==='Groovy')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Groovy.png")} alt="Groovy"/>
    )
    }
    else if(repo.language==='Haskell')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Haskell.svg")} alt="Haskell"/>
    )
    }
    else if(repo.language==='Julia')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Julia.png")} alt="Julia"/>
    )
    }
    else if(repo.language==='Java')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Java.svg")} alt="Java"/>
    )
    }
    else if(repo.language==='Kotlin')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Kotlin.svg")} alt="Kotlin"/>
    )
    }
    else if(repo.language==='Lua')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Lua.svg")} alt="Lua"/>
    )
    }
    else if(repo.language==='Javascript')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Javascript.svg")} alt="Javascript"/>
    )
    }
    else if(repo.language==='Rust')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Rust.png")} alt="Rust"/>
    )
    }
    else if(repo.language==='Python')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Python.svg")} alt="Python"/>
    )
    }
    else if(repo.language==='PHP')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/PHP.svg")} alt="PHP"/>
    )
    }
    else if(repo.language==='Matlab')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Matlab.png")} alt="Matlab"/>
    )
    }
    else if(repo.language==='R')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/R.svg")} alt="R"/>
    )
    }
    else if(repo.language==='Ruby')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Ruby.svg")} alt="Ruby"/>
    )
    }
    else if(repo.language==='Vue')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Vue.png")} alt="Vue"/>
    )
    }
    else if(repo.language==='VBA')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/VBA.png")} alt="VBA"/>
    )
    } 
    else if(repo.language==='Visual Basic')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Visual_Basic.jpg")} alt="Visual Basic"/>
    )
    }
    else if(repo.language==='Typescript')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Typescript.svg")} alt="Typescript"/>
    )
    }
    else if(repo.language==='Swift')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Swift.svg")} alt="Swift"/>
    )
    }
    else if(repo.language==='Perl')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Perl.png")} alt="Perl"/>
    )
    }
    else if(repo.language==='Scala')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Scala.png")} alt="Scala"/>
    )
    }
    else if(repo.language==='Objective-C')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Objective_C.png")} alt="Objectve-C" />
    )
    }
    else if(repo.language==='TeX')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/TeX.png")} alt="TeX" />
    )
    }
    else if(repo.language==='Jupyter Notebook')
    {
    return(
        <img width="16px" height="16px" src={require("../images/icons/languages/Jupyter_Notebook.png")} alt="Jupyter Notebook" />
    )
    }
    else
    return(
      <CodeIcon />
    )
  }
}
export default RepoCard