import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Gabrielcmoris Blog</h1>
        <h4>
          {data.allMarkdownRemark.totalCount}{" "}
          {data.allMarkdownRemark.totalCount > 1 ? "Posts" : "Post"}
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>
                  {node.frontmatter.title} - {node.frontmatter.date}
                </BlogTitle>
              </BlogLink>
              <p>{node.excerpt}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
      totalCount
    }
  }
`
