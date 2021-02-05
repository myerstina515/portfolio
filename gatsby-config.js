module.exports = {
  siteMetadata: {
    plugins: [
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: "gatsby-source-sanity",
        options: {
          projectId: "abc123",
          dataset: "blog",
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'Tina Myers Portfolio',
          path: './data'
        }
      },
      'gatsby-transformer-json'
    ],
  },
};
