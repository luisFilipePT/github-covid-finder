import React from 'react'
import { Box, Flex, Text } from 'theme-ui'

const Footer = () => {
  return (
    <Box
      sx={{
        borderTop: '1px solid',
        borderColor: 'cardBorder',
        py: '5px',
      }}
    >
      <Flex
        as="footer"
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: ['100%', '768px', '992px', '1400px'],
          py: '15px',
          margin: '0 auto',
        }}
      >
        <Text
          sx={{
            fontSize: '12px',
            color: 'text',
            fontFamily: 'inter',
            textAlign: 'center',
          }}
        >
          <a href="https://www.netlify.com">This site is powered by Netlify</a>
        </Text>
        <a
          href="https://www.helpfulengineering.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text
            sx={{
              letterSpacing: '2px',
              fontSize: '14px',
              color: 'text',
              fontFamily: 'inter',
              textAlign: 'center',
              my: 10,
            }}
          >
            Get involved
          </Text>
        </a>
        <Text
          sx={{
            fontSize: '12px',
            color: 'text',
            fontFamily: 'inter',
            textAlign: 'center',
          }}
        >
          <a href="https://twitter.com/_luisFilipePT">@_luisFilipePT</a>
          &nbsp;|&nbsp;
          <a href="https://github.com/luisFilipePT/github-covid-finder/blob/master/CODE_OF_CONDUCT.md">
            Code of Conduct
          </a>
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
