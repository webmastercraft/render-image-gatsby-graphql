module.exports = {
  siteMetadata: {
    title: `SMS finance, a.s. | Dělat věci správně se vyplácí`,
    description: `Dělat věci správně se vyplácí, finanční poradenství s noblesou`,
    keywords: `pojištění, investice, kariéra, finanční poradci`,
    url: `https://smsfinance.cz`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-html-attributes",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'cs'
      }
    },
  ],
};
