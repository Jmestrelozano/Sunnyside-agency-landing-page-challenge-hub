import React from "react";

//header - style
import { HeaderComponent, HeaderMenu, animateHeader } from "./header-style";

//header - image
import Logo from "./img/logo.svg";
import IconeBars from "./img/icon-hamburger.svg";
import IconArrow from "./img/icon-arrow-down.svg";

const Header = (propps) => {
  return (
    <HeaderComponent className="header" id="header">
      <HeaderMenu>
        {/* logo */}
        <a href=" #" className="header__logo">
          <img src={Logo} alt="Sunnyside logo" />
        </a>

        {/* menu control button */}
        <button
          type="button"
          className="header__btn"
          aria-label="menu control button"
          id="header__btn"
          onClick={animateHeader}
        >
          <img src={IconeBars} alt="icon-bars menu" />
        </button>

        {/* navigation menu */}
        <nav className="Header__menu" name="header__menu" id="header__menu">
          <div className="triangle"></div>
          <ul>
            <li>
              <a href=" #">About</a>
            </li>
            <li>
              <a href=" #">Services</a>
            </li>
            <li>
              <a href=" #">Projects</a>
            </li>
            <li>
              <a href=" #" className="active">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </HeaderMenu>

      {/* title */}
      <div className="header__title">
        <p>we are criative</p>
        <img src={IconArrow} alt="icon-arrow title" />
      </div>
    </HeaderComponent>
  );
};

export default Header;
