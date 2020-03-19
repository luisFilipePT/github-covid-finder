import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Flex } from 'theme-ui'
import Header from './header'
import Footer from './footer'

import './layout.css'

const PageLayout = ({ data, children }) => {
  const imageData = data.desktop.childImageSharp.fluid
  const siteData = data.siteData

  return (
    <BackgroundImage
      style={{ height: '100vh' }}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <Header title={siteData.siteMetadata.description} />
      <Flex
        as="main"
        sx={{
          overflowY: 'scroll',
          height: 'calc(100vh - 120px)',
          flexDirection: 'column',
          alignItems: 'center',
          p: '25px',
        }}
      >
        {children}
      </Flex>
      <Footer />
    </BackgroundImage>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        siteData: site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => <PageLayout data={data} {...props} />}
  />
)
