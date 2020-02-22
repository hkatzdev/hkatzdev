/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/hkatzdev",
  plugins: [`gatsby-plugin-postcss`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
      }
    },
  ]
}
