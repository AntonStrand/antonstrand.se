import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AnimatedText from "../components/animated-text"
import AnimatedChar from "../components/animated-char"
import SEO from "../components/seo"
import "../style/home.css"

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <section className='home'>
      <div>
        <h2>Hi there</h2>
        <h1>
          <AnimatedText>I'm Anton Strand.</AnimatedText>
        </h1>
        <h2>
          <AnimatedChar role='img' aria-label='laptop' aria-labelledby='laptop'>
            💻
          </AnimatedChar>{" "}
          Full-stack developer
        </h2>
        <p>
          <a href='mailto:jag@antonstrand.se'>Say hi</a>, checkout my stuff on{" "}
          <a href='https://github.com/antonstrand'>Github</a>, or learn more{" "}
          <Link to='/about'>about me</Link>.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
