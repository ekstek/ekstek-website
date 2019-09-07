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
      <h1>Modern Software Development</h1>
      <h2>
        Solving your problems and challenges with the best possible solution
      </h2>
    </div>
    <div style={{textAlign: 'center', marginTop: '10px', marginBottom: '40px', color: 'black'}}>
      <h1>What we do</h1>
    </div>
  </div>
  <div className="project-list-1">
    <Fade left>
  <div className="box1">
    <div className="box-content">
    <i class="fas fa-laptop-code fa-4x"></i>
    <div style={{marginTop: '35px', textAlign: 'center'}}>
    <h1>Full Stack Development</h1>
    <p>Developing end to end web applications</p>
    </div>
    </div>
</div>
</Fade>
<Fade right>
<div className="box2">
<div className="box-content">
<i class="fab fa-js-square fa-4x"></i>
<div style={{marginTop: '35px', textAlign: 'center'}}>
    <h1>Javascript Mastery</h1>
    <p>Transitioning towards modern and stable Javascript frameworks</p>
    </div>
    </div>
</div>
</Fade>
  </div>
  <div className="project-list-2">
    <Fade left>
  <div className="box3">
  <div className="box-content">
  <i class="fab fa-aws fa-4x"></i>
  <div style={{marginTop: '35px', textAlign: 'center'}}>
    <h1>Cloud Solutions</h1>
    <p>Providing cloud solutions based on Amazon Web Services</p>
    </div>
    </div>
</div>
</Fade>
<Fade right>
<div className="box4">
<div className="box-content">
<i class="fas fa-brain fa-4x"></i>
<div style={{marginTop: '35px', textAlign: 'center'}}>
    <h1>ERP Solutions</h1>
    <p>Enterprise Resource Planning solutions based on your requirements</p>
    </div>
    </div>
</div>
</Fade>
  </div>
  </div>
)

export default IndexPage
