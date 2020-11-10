import React from 'react'
import Layout from '../components/layout'
import { Container, Text } from 'theme-ui'
import SEO from '../components/SEO'

const NotFound = () => {
  return (
    <Layout>
      <SEO />
      <Container
        sx={{
          backgroundColor: 'background',
          padding: 16,
          borderRadius: '3px',
          marginTop: '80px',
          letterSpacing: '4px',
          fontSize: '56px',
          color: '#FF4136',
          fontFamily: 'inter',
          textAlign: 'center',
          fontWeight: 700,
        }}
      >
        <Text>#STAY THE FUCK HOME</Text>
      </Container>
      <Container
        sx={{
          fontFamily: 'inter',
          textAlign: 'center',
          backgroundColor: 'background',
          color: 'text',
          borderRadius: '3px',
        }}
      >
        <p>Not sure if the page you are searching exist!</p>
        <p>While I check feel free to navigate to the Home page</p>
      </Container>
    </Layout>
  )
}

export default NotFound
