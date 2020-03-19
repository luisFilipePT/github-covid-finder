import React from 'react'
import Layout from '../components/layout'
import { Container, Text } from 'theme-ui'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>Commit | STAY HOME</title>
        <meta
          name="description"
          content="Finder for repos on GitHub related to Corona"
        />
      </Helmet>
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
        <p>Some nice speech will go here.</p>
        <p>Waiting for @ruskin</p>
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

export default About
