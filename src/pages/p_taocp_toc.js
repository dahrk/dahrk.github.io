import React from "react"
import SEO from "../components/seo"
import ProjectLayout from "../components/projectLayout"

const ProjectTAoCPToC = () => (
  <ProjectLayout>
    <SEO title="TAoCP Readthrough Table of Contents" />
    <p>
      I wanted to continue learning after completing my degree. This book seems to be a good place to start.
      <br/>
      I want a central place where I can refer to specific parts of TAoCP as I need. It also serves as proof that I did read and understand the book, should the need ever arise.
    </p>
    <p>I started this project on June 26th 2020. {((new Date().getTime() - new Date("June 26, 2020 10:00:00").getTime())/1000/86400).toFixed(2)} days have elapsed.</p>
  </ProjectLayout>
)

export default ProjectTAoCPToC
