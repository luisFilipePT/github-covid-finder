import React from 'react'
import { Flex, Text, Button } from 'theme-ui'

const Pagination = ({ pageUp, pageDown, currentPage, totalResults }) => {
  return (
    <Flex
      sx={{
        fontSize: [16, 26],
        color: 'white',
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
          cursor: 'pointer',
          width: 36,
          height: 36,
          padding: 0,
          borderRadius: '50%',
          backgroundColor: 'orange',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={pageDown}>
        &#8617;
        </Button>
      <Text sx={{ color: 'grey', px: '1em', fontSize: [14, 16, 16, 20, 24], }}>page {currentPage} ({totalResults} results)</Text>
      <Button
        sx={{
          cursor: 'pointer',
          width: 36,
          height: 36,
          padding: 0,
          borderRadius: '50%',
          backgroundColor: 'orange',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={pageUp}>&#8618;</Button>
    </Flex >
  )
}

export default Pagination
