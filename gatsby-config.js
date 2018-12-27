module.exports = {
  siteMetadata: {
    title: `el.puas()`,
    description: `Web Artisan && WordPress Wrangler`,
    subtitle: ` Puas Website`,
    author:`@3lpu4s`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {

        baseUrl: `elpuas.com/`,
        
        protocol: `https`,

        hostingWPCOM: false,

        useACF: false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-glamor`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `el.puas( Web Artisan && WordPress Wrangler)`,
        short_name: `elpuas`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}