import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.FoodHub_logo} alt="FoodHub" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam magni nemo quod labore nam alias rem cumque fugiat. Ducimus ratione ut ipsum magnam maiores laborum doloribus provident doloremque earum distinctio?</p>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li key="" >Home</li>
            <li key="about">About us</li>
            <li key="delivery">Delivery</li>
            <li key="privacy">Privacy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact Info</h2>
          <ul>
            <li key="phone">+855 88 983 6146</li>
            <li key="email">FoodHub@gmail.com</li>
            <li key="battambang">Battambang</li>
            <li key="siemreap">Siem Reap</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Software Engineers:</h2>
          <ul>
            <li key="sean">Sean Phavath</li>
            <li key="nouch">Nouch Somphors</li>
            <li key="sopheab">Sopheab Visal</li>
            <li key="sin">Sin Soveasna</li>
            <li key="chhoum">Chhoum Sovanvatei</li>
          </ul>
        </div>
      </div>
      <div className="footer-social-icons">
        <Link to='https://www.facebook.com/vath11?mibextid=LQQJ4d'>
        <img src={assets.facebook} alt="Facebook" />
        </Link>
        <Link to='https://www.instagram.com/somphors_1?igsh=bm85bHJocXBmb2s='>
        <img src={assets.instagram} alt="Instagram" />
        </Link>
        <Link to='https://t.me/Tei_Tei'><img src={assets.twitter} alt="Twitter" /></Link>
        <Link to='mailto:sopheapvisal519@gmail.com'><img src={assets.email} alt="Email" /></Link>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; FoodHub.com - All rights reserved</p>
    </div>
  );
}

export default Footer;
