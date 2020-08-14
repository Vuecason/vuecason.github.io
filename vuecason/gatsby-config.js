/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/ 
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Vuecason',
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: { 
        preset:"@theme-ui/preset-dark",
      },
    },
  ],
}
