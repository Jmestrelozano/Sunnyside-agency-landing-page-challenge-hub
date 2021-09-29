import styled from "styled-components";
import bgHeaderDesktop from "./img/header-desktop.jpg";
import bgHeaderMobile from "./img/header-mobile.jpg";
import "../style-guide.css";

const active = {
  borderRadius: "20px",
  fontFamily: "Fraunces, serif",
  padding: "10px",
  textAlign: "center",
  width: "100px",
};

export const HeaderComponent = styled.header`
  position: relative;
  background: url(${bgHeaderDesktop}) no-repeat;
  background-size: 1050px, cover;
  background-position: center 100%;
  background-color: #3ebfff;
  padding-bottom: 240px;
  //control menu
  .header__btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: none;
  }

  //menu
  .Header__menu {
    ul {
      display: flex;
      align-items: center;

      a {
        font-family: "Barlow", sans-serif;
        color: var(--white);
        display: block;
        &:hover {
          color: #6fcfff;
        }
      }

      li + li {
        margin-left: 30px;
      }

      .active {
        display: block;
        background-color: var(--white);
        color: var(--very-dark-blue);
        ${active}

        &:hover {
          background-color: #6fcfff;
          color: var(--white);
        }
      }
    }

    .triangle {
      display: none;
    }
  }

  //title
  .header__title {
    color: var(--white);
    font-family: "Fraunces", serif;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    p {
      width: 100%;
      font-size: 3.1rem;
      margin-top: 35px;
    }

    img {
      margin-top: 75px;
    }
  }

  @media only screen and (max-width: 599px) {
    background: url(${bgHeaderMobile}) no-repeat;
    background-size: cover;
    background-position: center center;
    padding-bottom: 200px;
    margin-top: -20px;

    //control menu
    .header__btn {
      display: block;
    }

    //menu
    .Header__menu {
      display: none;
      width: 85%;
      background-color: var(--white);
      padding: 60px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -45%);
      z-index: 999;

      .triangle {
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 30px 30px;
        border-color: transparent transparent #fff transparent;
        position: absolute;
        top: -29px;
        right: 0;
      }

      ul {
        flex-direction: column;

        li + li {
          margin-top: 40px;
          margin-left: 0;
        }

        a {
          color: var(--dark-grayish-blue);
        }
        .active {
          background-color: var(--yellow);
        }
      }
    }

    //title
    .header__title {
      width: 80%;
      margin: 0 auto;

      p {
        font-size: 3rem;
        position: relative;
        top: 30px;
      }

      img {
        margin-top: 40px;
        position: relative;
        top: 40px;
      }
    }
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;

  //animation - header (show)
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fadeIn {
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  @media screen and (max-width: 599px) {
    margin-top: 5%;
    padding: 20px;
  }

  //animation - header (hide)
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .fadeOut {
    animation-name: fadeOut;
    animation-duration: 1s;
    animation-fill-mode: both;
  }
`;

let n = 1;
export function animateHeader() {
  if (n === 1) {
    window.document.querySelector("#header__menu").style.display = "block";
    window.document.querySelector("#header__menu").classList.add("fadeIn");
    window.document.querySelector("#header__menu").classList.remove("fadeOut");

    return (n = 0);
  } else {
    window.document.querySelector("#header__menu").classList.add("fadeOut");
    window.document.querySelector("#header__menu").classList.remove("fadeIn");

    setTimeout(() => {
      window.document.querySelector("#header__menu").style.display = "none";
    }, 999);
    return (n = 1);
  }
}

window.onresize = () => {
  if (window.innerWidth > 375) {
    window.document.querySelector("#header__menu").style.display = "block";
    window.document.querySelector("#header__menu").classList.remove("fadeOut");
  }
};
