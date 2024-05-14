import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__head">
          <h1>Reach out to me!</h1>
        </div>
        <div className="footer__middle">
          <div className="footer__location">
            <p>📍New Delhi, India</p>
          </div>
          <div className="footer__social">
            <Link to={"https://www.linkedin.com/in/dr-arun-kumar-dubey-42821241/"}><i class="ri-linkedin-box-fill"></i></Link>
            <Link><i class="ri-github-fill"></i></Link>
          </div>
        </div>
        <div className="footer__bottom">
          <h5>Dr. Arun Kumar Dubey</h5>
        </div>
      </div>
    </>
  );
}

export default Footer;
