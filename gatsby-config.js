module.exports = {
    siteMetadata: {
        title: 'iCenter Tech Data Science',
        author: 'iCenter',
        description: 'Artigos e tutorial sobre Data Science',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                        },
                    },
                ],
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
    ],
}
