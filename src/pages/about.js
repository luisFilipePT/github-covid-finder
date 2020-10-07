import React from 'react'
import Layout from '../components/layout'
import { Container, Text, Box, Link } from 'theme-ui'
import SEO from '../components/SEO'

const About = () => {
  return (
    <Layout>
      <SEO />
      <Container
        sx={{
          padding: 4,
          color: 'text',
          fontFamily: 'inter',
          fontSize: 24,
          textAlign: 'center',
          backgroundColor: 'cardBackground',
          borderRadius: '8px',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'cardBorder',
        }}
      >
        <Box p={4}>
          <h3>
            "Opportunity 3 - Start <em>contributing</em> immediately
          </h3>
          <Text>
            It would be great if any software engineer with spare time can just
            peruse open Github issues across all OpenAir [Covid-19] projects,
            filter for their area of expertise and just submit little PRs within
            their specific time constraints. You shouldn’t even need to engage
            too deeply with the wider project organisation; just see a list of
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
