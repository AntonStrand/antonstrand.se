import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <h1>Not found.</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to='/'>How about the start page?</Link>
  </Layout>
)

export default NotFoundPage
