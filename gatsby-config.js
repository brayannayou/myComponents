module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`query-string`],
      },
    },
  ],
}
