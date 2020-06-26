import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h4>Current projects</h4>
    <Link to="/p_taocp_toc">Making my way through the Art of Computer Programming</Link>
    <br/><br/><br/>
    <h4>Past projects</h4>
    <p>Digging through the archives, will be back soon!</p>
    <br/>
    <Link to="/"> &lt;- Home</Link>
  </Layout>
)

export default Projects
