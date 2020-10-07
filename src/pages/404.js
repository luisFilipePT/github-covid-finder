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
          padding: 4,
          color: 'white',
          fontFamily: 'inter',
          fontSize: 24,
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '3px',
        }}
      >
        <p>Not sure if the page you are searching exist!</p>
        <p>While I check feel free to navigate to the Home page</p>
      </Container>
      <Container
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 16,
          borderRadius: '3px',
          marginTop: '60px',
          letterSpacing: '4px',
          fontSize: '56px',
          color: '#FF4136',
          fontFamily: 'inter',
          textAlign: 'center',
          fontWeight: 700,
        }}
      >
        <Text>#STAYTHEFUCKHOME</Text>
      </Container>
    </Layout>
  )
}

export default NotFound
