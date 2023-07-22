import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";

import { FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <AiOutlineFacebook size={25} className="hover-text" />
        <AiOutlineInstagram size={25} className="hover-text" />
        <FiTwitter size={25} className="hover-text" />
        <AiOutlineYoutube size={25} className="hover-text" />
      </div>
      <div className="contact-us">
        <p className="hover-text">Contact us</p>
        <p className="hover-text">Our Services</p>
        <p className="hover-text">Privacy Policy</p>
        <p className="hover-text">Terms & Conditions</p>
      </div>
      <p>Copyright &copy; Sudipa Mandal 2023</p>
    </div>
  );
};

export default Footer;
