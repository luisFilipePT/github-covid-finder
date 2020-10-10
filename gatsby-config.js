const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `GitHub Covid Finder`,
    description: `Find Github repositories related to COVID-19`,
    url: `https://commit-to-fight-covid.netlify.app/`,
    image: '/images/app-screenshot.png',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`inter`, `source sans pro\:300,400,400i,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/icon.png',
        appName: 'GitHub Covid Repo finder',
        appDescription:
          'A simple way of searching for GitHub repos related to Covid virus',
        developerName: 'Luis',
        background: '#1d1d2b',
        theme_color: '#FF4136',
        display: 'standalone',
        orientation: 'any',
        version: '1.0',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
  ],
}
