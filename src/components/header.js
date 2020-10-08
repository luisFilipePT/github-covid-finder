import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Text, Image } from 'theme-ui'

import Search from './search'
import mainLogo from '../../src/images/logo-white.svg'
import GithubIcon from "../images/icons/github.inline.svg"

const Header = ({ isShowSearch, searchCompProps }) => {
  return (
    <Box
      sx={{
        bg: 'rgba(0, 0, 0, 0.4)',
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
          boxShadow: '0 1px 1rem rgba(10, 10, 25, 0.3)',
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
              <Image style={{ fill: '#FF4136', width: 180 }} src={mainLogo} />
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
          }}
        >
          <Link to="/about">
            <Text
              sx={{
                fontSize: '16px',
                color: 'white',
                fontFamily: 'inter',
                textAlign: 'center',
                mr: '1em'
              }}
            >
              About
          </Text>
          </Link>
          <a href="https://github.com/luisFilipePT/github-covid-finder" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
