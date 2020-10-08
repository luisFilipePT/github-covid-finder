import React from 'react'
import { Link } from 'gatsby'
<<<<<<< HEAD
import { Box, Flex, Text, Image, useColorMode, Button } from 'theme-ui'
import logoWhite from '../../src/images/logo-white.svg'
import logoBlack from '../../src/images/logo.svg'
import GithubIcon from "../images/icons/github.inline.svg"
const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
=======
import { Box, Flex, Text, Image } from 'theme-ui'

import Search from './search'
import mainLogo from '../../src/images/logo-white.svg'
import GithubIcon from "../images/icons/github.inline.svg"

const Header = ({ isShowSearch, searchCompProps }) => {
>>>>>>> pass search comp prop to search component and conditionally check if should show search
  return (
    <Box
      sx={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'cardBorder',
        marginBottom: '24px'
      }}>
      <Flex
        as="header"
        sx={{
          height: '120px',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 auto',
          maxWidth: ['100%', '768px', '992px', '1400px'],
          px: '15px',
        }}
      >
        <Flex
          sx={{
            flex: 1,
            alignItems: 'center',
          }}
        >
          <Text
            sx={{
              fontSize: '24px',
              color: 'white',
              fontFamily: 'inter',
              textAlign: 'center',
            }}
          >
            <Link to="/" style={{ display: 'block', lineHeight: 0 }} >
              <Image style={{ fill: '#FF4136', width: 180 }} src={colorMode === 'dark' ? logoWhite : logoBlack} />
            </Link>
          </Text>
          { isShowSearch &&
            <Box
              m="16px 16px 0px 16px"
              sx={{
                width: '76%',
              }}
            >
              <Box
                sx={{
                  '@media only screen and (max-width: 916px)': {
                    display: 'none',
                  },
                }}
              >
                <Search {...searchCompProps}/>
              </Box>
              <Box
                sx={{
                  display: 'none',
                  '@media only screen and (max-width: 916px)': {
                    display: 'initial',
                  },
                }}
              >
              </Box>
            </Box>
          }
        </Flex>
        <Flex
          mb="8px"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link to="/about">
            <Text
              sx={{
                fontSize: '16px',
                color: 'text',
                fontFamily: 'inter',
                textAlign: 'center',
                mr: '1em'
              }}
            >
              About
          </Text>
          </Link>
          <a href="https://github.com/luisFilipePT/github-covid-finder" target="_blank" rel="noopener noreferrer">
            <Text sx={{color: 'text', marginTop: '4px'}}>
              <GithubIcon />
            </Text>
          </a>
          <Button sx={{
            fontFamily: 'inter',
            marginLeft: '24px',
            cursor: 'pointer'
          }} 
          variant='selectTheme'
          onClick={e => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default')
          }}>
            {colorMode === 'default' ? 'Dark' : 'Light'}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
