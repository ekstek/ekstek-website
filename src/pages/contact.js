import React from 'react'
import NavBar from "../components/navbar"
import SEO from "../components/seo"
import Footer from "../components/footer"
import '../styles/contact.css'

const Contact = () => (
    <div>
    <div className="contact-page-container bg-purple">
        <SEO title="Contact" />
        <NavBar />
        <div className="contact-page-content">
            <div className="contact-desc-box">
            <i class="far fa-handshake fa-9x"></i>
            <div className="contact-desc">
                <p>Contact</p>
                <p>We're all ears and always available to build long-term relationship with our clients.</p>
                <p>Get connected and let's work together to take your idea to full operational business.</p>
            </div>
            </div>
            <div className="contact-info">
            <a href="mailto:contact@ekstek.io"><i class="fas fa-envelope contact-icon fa-3x"></i>Email us</a>
            <a href="https://www.youtube.com/channel/UC3UwpowzvxhUigHya7VQwfA" target="_blank" rel="noopener noreferrer"><i class="contact-icon fab fa-youtube fa-3x"></i>Watch us on YouTube</a>
            <a href="https://www.facebook.com/ekstek/" target="_blank" rel="noopener noreferrer"><i class="contact-icon fab fa-facebook-square fa-3x"></i>Find us on Facebook</a>
            </div>
        </div>
    </div>
    <Footer />
    </div>
)

export default Contact;