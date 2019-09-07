import React from "react"
import "../styles/index.css"
import NavBar from "../components/navbar"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

const IndexPage = () => (
  <div>
    <div className="index-page-container">
      <SEO />
      <NavBar />
      <div className="main-heading">
        <h1>Modern Software Development</h1>
        <h2>
        Delivering web services consistently and rapidly to businesses all around the globe
        </h2>
      </div>
      <div className = "what-we-do"
      >
        <h1>What we do</h1>
      </div>
    </div>
    <div className="project-list-1">
      <Fade left>
        <div className="box1 shadow-effect">
          <div className="box-content">
            <i class="fas fa-laptop-code fa-4x"></i>
            <div style={{ marginTop: "35px", textAlign: "center" }}>
              <h1>Full Stack Development</h1>
              <p>Developing end to end web applications to empower businesses from various industries</p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="box2">
          <div className="box-content">
          <i class="fas fa-paint-brush fa-4x"></i>
            <div style={{ marginTop: "35px", textAlign: "center" }}>
              <h1>UI/UX & Creativity</h1>
              <p>
              Working with professional creatives to create the best possible user experiences
              </p>
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
            <div style={{ marginTop: "35px", textAlign: "center" }}>
              <h1>Cloud Solutions</h1>
              <p>Providing cloud solutions to minimize upfront IT infrastructure costs, while increasing productivity, performance and agility for organizations.</p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="box4">
          <div className="box-content">
            <i class="fas fa-brain fa-4x"></i>
            <div style={{ marginTop: "35px", textAlign: "center" }}>
              <h1>ERP Solutions</h1>
              <p>
              Development of ERP and CRM software to streamline company procedures and resource management.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </div>
)

export default IndexPage
