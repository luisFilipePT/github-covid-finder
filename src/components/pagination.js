import React from 'react'
import { Grid, Text, Button } from 'theme-ui'

const Pagination = ({ pageUp, pageDown, currentPage, totalResults }) => {
  return (
    <Grid
      sx={{
        border: 'solid 1px #FF4136',
        borderRadius: 5,
        height: [135, 65],
        fontSize: [16, 26],
        color: 'white',
        textAlign: 'center',
        width: '80vw',
        fontFamily: 'inter',
        padding: '8px',
        mt: '30px',
      }}
      columns={[1,3]}
    >
      <Button disabled={currentPage === 1} sx={{ cursor: 'pointer', backgroundColor: '#313131' }} onClick={pageDown}>&#8617;</Button>
      <Text sx={{ color: 'grey', pt: '8px', fontSize: [16, 16, 16, 22, 26], }}>page {currentPage} ({totalResults} results)</Text>
      <Button sx={{ cursor: 'pointer', backgroundColor: '#313131' }} onClick={pageUp}>&#8618;</Button>
    </Grid>
  )
}

export default Pagination
