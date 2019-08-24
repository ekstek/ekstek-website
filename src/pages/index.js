import React from "react"
import "../styles/index.css"
import NavBar from "../components/navbar"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade'

const IndexPage = () => (
  <div>
  <div className="index-page-container">
    <SEO />
    <NavBar />
    <div className="main-heading">
      <h1>Lorem ipsum dolor sit amet</h1>
      <h2>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </h2>
    </div>
  </div>
  <div className="project-list-1">
    <Fade left>
  <div className="box1">

</div>
</Fade>
<Fade right>
<div className="box2">
  
</div>
</Fade>
  </div>
  <div className="project-list-2">
    <Fade left>
  <div className="box3">

</div>
</Fade>
<Fade right>
<div className="box4">
  
</div>
</Fade>
  </div>
  </div>
)

export default IndexPage
