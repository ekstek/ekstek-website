import React from "react"
import "../styles/index.css"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

const IndexPage = () => (
  <div>
    <div className="index-page-container bg-purple">
      <SEO title="Home" />
      <NavBar />
      <div className="main-heading">
        <h1>Modern Software Development</h1>
        <h2>
          Delivering web services consistently and rapidly to businesses all
          around the globe
        </h2>
      </div>
      <div className="what-we-do">
        <h1>What we do</h1>
      </div>
      <div class="downArrow bounce">
        <a href="#features"><img
          width="40"
          height="40"
          alt=""
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="
        /></a>
      </div>
    </div>
    <div className="project-list-1" id="features">
      <Fade big>
        <div className="box1 shadow-effect">
          <div className="box-content">
            <i class="fas fa-laptop-code fa-4x"></i>
            <div style={{ marginTop: "35px", textAlign: "center" }}>
              <h1>Full Stack Development</h1>
              <p>
                Developing end to end web applications to empower businesses
                from various industries
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade big>
        <div className="box2">
          <div className="box-content">
            <i class="fas fa-paint-brush fa-4x"></i>
            <div style={{ marginTop: "35px", textAlign: "center" }}>
              <h1>UI/UX & Creativity</h1>
              <p>
                Working with professional creatives to create the best possible
                user experiences
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div className="project-list-2">
      <Fade big>
        <div className="box3">
          <div className="box-content">
            <i class="fab fa-aws fa-4x"></i>
            <div style={{ marginTop: "35px", textAlign: "center" }}>
              <h1>Cloud Solutions</h1>
              <p>
                Providing cloud solutions to minimize upfront IT infrastructure
                costs, while increasing productivity, performance and agility
                for organizations.
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade big>
        <div className="box4">
          <div className="box-content">
            <i class="fas fa-brain fa-4x"></i>
            <div style={{ marginTop: "35px", textAlign: "center" }}>
              <h1>ERP Solutions</h1>
              <p>
                Development of ERP and CRM software to streamline company
                procedures and resource management.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <Footer />
  </div>
)

export default IndexPage
