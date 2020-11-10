import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Box, Flex } from 'theme-ui'
import Header from './header'
import Footer from './footer'
import { TransitionState } from 'gatsby-plugin-transition-link'
import posed from 'react-pose'

import './layout.css'

const WrapperStyle = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

const PageLayout = ({
  data,
  children,
  isShowModal,
  isShowSearch,
  toggleModal,
  searchCompProps,
}) => {
  const siteData = data.siteData

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: `background`,
        filter: `blur(${isShowModal ? 3 : 0}px)`,
      }}
    >
      <Header
        sx={{}}
        toggleModal={toggleModal}
        isShowSearch={isShowSearch}
        searchCompProps={searchCompProps}
        title={siteData.siteMetadata.description}
      />
      <Flex
        as="main"
        sx={{
          flex: 1,
          overflowY: 'scroll',
          flexDirection: 'column',
          alignItems: 'center',
          p: ['20px 0'],
          position: 'relative',
        }}
      >
        <Box
          sx={{
            px: '15px',
            maxWidth: ['100%', '768px', '992px', '1400px'],
          }}
        >
          <TransitionState>
            {({ transitionStatus, exit, entry, mount }) => {
              return (
                <WrapperStyle pose={mount ? 'visible' : 'hidden'}>
                  {children}
                </WrapperStyle>
              )
            }}
          </TransitionState>
        </Box>
      </Flex>
      <Footer />
    </Flex>
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
