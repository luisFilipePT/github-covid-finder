import React from 'react'
import { Link } from 'gatsby'
import { Flex, Text } from 'theme-ui'

const Header = () => {
  return (
    <Flex
      as="header"
      sx={{
        bg: 'rgba(0, 0, 0, 0.2)',
        height: '80px',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: '40px',
        boxShadow: '0 1px 1rem rgba(10, 10, 25, 0.3)',
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
        <Link to="/">
          <span style={{ color: '#FF4136' }}>Commit</span>ted to fight Corona
        </Link>
      </Text>
      <Link to="/about">
        <Text
          sx={{
            fontSize: '16px',
            color: 'white',
            fontFamily: 'inter',
            textAlign: 'center',
          }}
        >
          About
        </Text>
      </Link>
    </Flex>
  )
}

export default Header
