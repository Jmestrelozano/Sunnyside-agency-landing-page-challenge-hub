import React from "react";
import { ComponentFooter } from "./Footer.js";

import Logo from "./img/logo.svg";
import Facebook from "./img/icon-facebook.svg";
import Instagram from "./img/icon-instagram.svg";
import Twitter from "./img/icon-twitter.svg";
import Pinterest from "./img/icon-pinterest.svg";

const Footer = (props) => {
  return (
    <ComponentFooter className="footer">
      <div className="footer__container">
        <img src={Logo} alt="Logo - Sunnyside" />

        {/* navigation menu*/}
        <ul className="footer__menu">
          <li>
            <a href=" #">Abount</a>
          </li>
          <li>
            <a href=" #">Services</a>
          </li>
          <li>
            <a href=" #">Projects</a>
          </li>
        </ul>

        {/* social networks */}
        <ul className="footer__social">
          <li>
            <a href=" #">
              <img src={Facebook} alt="icon - Facebook" />
            </a>
          </li>
          <li>
            <a href=" #">
              <img src={Instagram} alt="icon - Instagram" />
            </a>
          </li>
          <li>
            <a href=" #">
              <img src={Twitter} alt="icon - Twitter" />
            </a>
          </li>
          <li>
            <a href=" #">
              <img src={Pinterest} alt="icon - Pinterest" />
            </a>
          </li>
        </ul>

        <div className="attribution">
          <span> Challenge by </span>
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          <span>. Coded by </span>
          <a
            href="#"

            rel="noreferrer"
          >
            jorge mestre lozano
          </a>
          .
        </div>
      </div>
    </ComponentFooter>
  );
};

export default Footer;
