import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4>Hi!</h4>
    <p>I'm Tony Deng. I'm a technology enthusiast, builder, and optimist.</p>
    <p>Both the world and this website are currently in a transition period. <br/>We will return to our regularly scheduled programming shortly.</p>
    
    <p>Check out some of my projects <em><Link to="/projects/">here.</Link></em><br/>Check out my resume <em><a href="resume.pdf">here.</a></em></p> 

    <br />
    <p>
      <em>
        <a href="https://github.com/dahrk" >github</a><br/>
        <a href="https://www.linkedin.com/in/htonydeng">linkedin</a><br/>
        <a href="mailto:h.tony.deng+site@gmail.com">email</a>
      </em>
    </p>
  </Layout>
)
//<Link to="/404/">Go to page 2</Link> <br />

export default IndexPage
