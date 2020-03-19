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
        Made with <span role="img" aria-label="heart">❤️</span>
      </Text>
      <Text
        sx={{
          letterSpacing: '2px',
          fontSize: '14px',
          color: '#FF4136',
          fontFamily: 'inter',
          textAlign: 'center',
        }}
      >
        #STAYTHEFUCKHOME
      </Text>
      <a href="https://twitter.com/_luisFilipePT">
        <Text
          sx={{
            fontSize: '12px',
            color: 'white',
            fontFamily: 'inter',
            textAlign: 'center',
          }}
        >
          @_luisFilipePT
        </Text>
      </a>
    </Flex>
  )
}

export default Footer
