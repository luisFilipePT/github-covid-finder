import React from 'react'
import { Flex, Text, Button } from 'theme-ui'

const Pagination = ({ pageUp, pageDown, currentPage, totalResults }) => {
  const ButtonStyle = {
    cursor: 'pointer',
    width: 36,
    height: 36,
    padding: 0,
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'cardBorder',
    backgroundColor: 'cardBackground',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: 'text',
  }

  return (
    <Flex
      sx={{
        fontSize: [16, 26],
        color: 'textRreverse',
        textAlign: 'center',
        fontFamily: 'inter',
        padding: '8px',
        mt: '30px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        disabled={currentPage === 1}
        sx={{
          ...ButtonStyle,
        }}
        onClick={pageDown}
      >
        &#8592;
      </Button>
      <Text sx={{ color: 'text', px: 32, fontSize: 14 }}>
        Page {currentPage} ({totalResults} results)
      </Text>
      <Button
        sx={{
          ...ButtonStyle,
        }}
        onClick={pageUp}
      >
        &#8594;
      </Button>
    </Flex>
  )
}

export default Pagination
