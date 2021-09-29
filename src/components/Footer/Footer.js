import styled from "styled-components";
import "../style-guide.css";

export const ComponentFooter = styled.footer`
  background-color: #90d4c5;
  padding: 4%;

  //global - link
  a {
    color: var(--dark-cyan);
    font-family: "Barlow", sans-serif;

    &:hover {
      color: var(--white);
    }
  }

  img {
    margin-top: 50px;
  }
  .footer__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .footer__menu {
      display: flex;
      margin: 30px 0;

      li + li {
        margin-left: 50px;
      }
    }

    .footer__social {
      display: flex;
      margin: 60px 0 20px 0;

      li + li {
        margin-left: 30px;
      }
    }

    .attribution {
      text-align: center;
      span {
        color: var(--dark);
      }
    }
  }

  @media screen and (max-width: 600px) {
    img {
      margin-top: 70px;
    }
    .footer__container {
      .footer__menu {
        margin-top: 40px;
      }

      .footer__social {
        margin: 20px 0;
      }
    }
    .attribution {
      margin: 20px 0;
    }
  }
`;
