import React from 'react';
import '../styles/footer.css'
import DarkLogo from '../images/dark-logo.png'

const Footer = () => (
    <div className="footer-container">
        <div className="footer-boxes">
        <div className="box-1-footer">
        <img
        src={DarkLogo}
        width="150"
        height="40"
        className="d-inline-block align-top"
        alt="ekstek logo"
      />
      <div className="address-details">
      <p>Building 11-C, Lane 3</p>
      <p>Ittehad Commercial</p>
      <p>Phase-VII</p>
      <p>DHA, Karachi</p>
      </div>
        </div> 
        <div className="get-connected">
            <p>Get Connected</p>
            <div className="connected-icons">
            <a href="mailto:contact@ekstek.io"><i class="fas fa-envelope footer-icon fa-2x"></i></a>
            <a href="https://www.youtube.com/channel/UC3UwpowzvxhUigHya7VQwfA" target="_blank"><i class="footer-icon fab fa-youtube fa-2x"></i></a>
            <a href="https://www.facebook.com/ekstek/" target="_blank"><i class="footer-icon fab fa-facebook-square fa-2x"></i></a>
            </div>
        </div>
        </div>
        <div className="copyright-line">
        <p>&copy; 2019 Ekstek Software</p>
        </div>
    </div>
)

export default Footer