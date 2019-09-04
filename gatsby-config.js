/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Cazcanes Tequila',
    company: 'Cazcanes Company',
    liquoramaCazcanes: 'https://www.liquorama.net/cazcanes-tequila/',
    liquoramaBlanco: 'https://www.liquorama.net/cazcanes-no9-blanco-tequila-750ml.html',
    liquoramaReposado: 'https://www.liquorama.net/cazcanes-no7-reposado-tequila-750ml.html',
    liquoramaAnejo: 'https://www.liquorama.net/cazcanes-no7-anejo-tequila-750ml.html',
    facebook: 'https://www.facebook.com/officialcazcanestequila/',
    twitter: 'https://twitter.com/TequilaCazcanes',
    instagram: 'https://www.instagram.com/officialcazcanestequila/',
    website: 'http://cazcanestequila.com/',
    telephone: '(818) 111-1111',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build-javascript'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Special Elite',
            variants: ['400'],
          },
          {
            family: 'Open Sans',
            variants: ['400', '600', '900'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
  ],
};
