import React from "react"
import '../styles/index.css'
import NavBar from '../components/navbar'
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div> 
     <NavBar />
     <div className = "main-heading">
       <h1>Lorem ipsum dolor sit amet</h1>
       <h2>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h2>
     </div>
  </div>
)

export default IndexPage
