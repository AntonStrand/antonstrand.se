import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const About = ({ data }) => <MDXRenderer>{data.mdx.body}</MDXRenderer>

export const query = `
query About {
  mdx(frontmatter: { title: { eq: "About" } }) {
    body
  }
}
`

export default About
