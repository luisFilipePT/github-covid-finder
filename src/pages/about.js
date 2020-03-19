import React from 'react'
import Layout from '../components/layout'
import { Container, Text, Box, Link } from 'theme-ui'
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
        <Box p={4} color="background" bg="text">
          <h3>
            "Opportunity 3 - Start <em>contributing</em> immediately
          </h3>
          <Text>
            It would be great if any software engineer with spare time can just
            peruse open Github issues across all OpenAir [Covid-19] projects, filter for
            their area of expertise and just submit little PRs within their
            specific time constraints. You shouldn’t even need to engage too
            deeply with the wider project organisation; just see a list of
            valuable quickwins that you can tackle rapidly to add value to any
            team that needs it."
          </Text>
        </Box>
        <p>
          This project was inspired by the above excerpt from
          <Link
            href="https://jonnyparris.github.io/COVID-helping"
            sx={{ color: 'secondary' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            this blogpost.
          </Link>
        </p>
      </Container>
    </Layout>
  )
}

export default About
