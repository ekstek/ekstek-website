import React from 'react'
import NavBar from "../components/navbar"
import SEO from "../components/seo"
import '../styles/contact.css'

const Contact = () => (
    <div>
    <div className="contact-page-container bg-purple">
        <SEO title="Contact" />
        <NavBar />
        <div className="contact-page-content">
            <div></div>
            <div></div>
        </div>
    </div>
    </div>
)

export default Contact;