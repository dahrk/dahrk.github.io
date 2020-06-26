import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

import Layout from "./layout"

const ProjectLayout = ({ children }) => (
    <Layout>
      {children}
      <p><Link to="/projects/">&lt;-Projects</Link></p> 
  </Layout>
)

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectLayout