import React from 'react'
import { Link } from 'gatsby'
<<<<<<< HEAD
<<<<<<< HEAD
import { Box, Flex, Text, Image, useColorMode, Button } from 'theme-ui'
import logoWhite from '../../src/images/logo-white.svg'
import logoBlack from '../../src/images/logo.svg'
import GithubIcon from "../images/icons/github.inline.svg"
const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
=======
import { Box, Flex, Text, Image } from 'theme-ui'
=======
import { Box, Flex, Text, Image, Button } from 'theme-ui'
>>>>>>> show open search modal button when on small screen

import Search from './search'
import mainLogo from '../../src/images/logo-white.svg'
import GithubIcon from "../images/icons/github.inline.svg"
import SearchIcon from "../images/icons/search.inline.svg"

<<<<<<< HEAD
const Header = ({ isShowSearch, searchCompProps }) => {
>>>>>>> pass search comp prop to search component and conditionally check if should show search
=======
const Header = ({ isShowSearch, searchCompProps, toggleModal }) => {
>>>>>>> show open search modal button when on small screen
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
              sx={{
                width: '76%',
                margin: '16px 16px 0px 16px',
                '@media only screen and (max-width: 916px)': {
                  marginTop: 0,
                  width: 'auto',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  margin: '0px 16px 0px auto',
                },
                '@media only screen and (max-width: 320px)': {
                  margin: '0px 6px',
                },
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
              <Button
                onClick={toggleModal}
                backgroundColor="rgb(157, 31, 30)"
                sx={{
                  padding: '6px 12px',
                  '@media only screen and (min-width: 916px)': {
                    display: 'none',
                  },
                }}
              >
                <SearchIcon
                  style={{
                    width: 16,
                    height: 16,
                  }}
                />
              </Button>
            </Box>
          }
        </Flex>
        <Flex
          sx={{
            justifyContent: 'space-between',
<<<<<<< HEAD
            alignItems: 'center',
=======
            '@media only screen and (min-width: 916px)': {
              marginBottom: 9,
            },
>>>>>>> show open search modal button when on small screen
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
