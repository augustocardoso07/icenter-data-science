import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostThumb from '../components/PostThumb'

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        cover {
                            childImageSharp {
                                resize {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const HomeIndex = ({ data }) => {
    //console.log(data)
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const { edges } = data.allMarkdownRemark
    //console.log(edges)

    return (
        <Layout>
            <Helmet>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
            </Helmet>

            <div id="main">
                <section id="one">
                    <header className="major">
                        <h2>
                            Você quer escrever sobre Data Science e ganhar horas
                            complementares?
                        </h2>
                    </header>
                    <p>
                        orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
                        nisi lorem vulputate lorem neque cubilia ac in
                        adipiscing in curae lobortis tortor primis integer massa
                        adipiscing id nisi accumsan pellentesque commodo blandit
                        enim arcu non at amet id arcu magna. Accumsan orci
                        faucibus id eu lorem semper nunc nisi lorem vulputate
                        lorem neque cubilia.
                    </p>
                    <ul className="actions">
                        <li>
                            <a href="/" className="button">
                                Saiba como!
                            </a>
                        </li>
                    </ul>
                </section>

                <section id="two">
                    <h2>Recent Work</h2>
                    <div className="row">
                        {edges.map(edge => {
                            return (
                                <PostThumb
                                    key={edge.node.id}
                                    title={edge.node.frontmatter.title}
                                    description={
                                        edge.node.frontmatter.description
                                    }
                                    image={
                                        edge.node.frontmatter.cover
                                            .childImageSharp.resize.src
                                    }
                                    slug={edge.node.fields.slug}
                                />
                            )
                        })}
                    </div>
                    <ul className="actions">
                        <li>
                            <a href="/" className="button">
                                Carregar mais artigos
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </Layout>
    )
}

export default HomeIndex
