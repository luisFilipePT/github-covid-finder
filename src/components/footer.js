import React from 'react'
import { Flex, Text } from 'theme-ui'

const Footer = () => {
  return (
    <Flex
      as="footer"
      sx={{
        bg: 'rgba(0, 0, 0, 0.2)',
        height: '40px',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: '40px',
      }}
    >
      <Text
        sx={{
          fontSize: '12px',
          color: 'white',
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
            color: 'white',
            fontFamily: 'inter',
            textAlign: 'center',
          }}
        >
          Get involved
        </Text>
      </a>
      <Text
        sx={{
          fontSize: '12px',
          color: 'white',
          fontFamily: 'inter',
          textAlign: 'center',
        }}
      >
        <a href="https://twitter.com/_luisFilipePT">@_luisFilipePT</a>&nbsp;|&nbsp;
        <a href="https://github.com/luisFilipePT/github-covid-finder/blob/master/CODE_OF_CONDUCT.md">
          Code of Conduct
        </a>
      </Text>
    </Flex>
  )
}

export default Footer
