import React from "react";
import Logo from "../assets/images/Logo.PNG";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6">
            <img src={Logo} alt="Hansei Logo" />
          </div>
        </div>
        {/* <hr /> */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Hansei.Uinv | Bit_BTS | Chatbot -
            service | Project
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
