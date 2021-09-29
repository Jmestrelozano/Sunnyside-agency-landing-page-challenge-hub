import styled from "styled-components";
import "../../style-guide.css";

export const AboutComponent = styled.section`
  .main-about__container {
    .main-about__item {
      display: flex;
      margin-bottom: -5px;

      .main-about__description {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        padding: 25px;

        h2 {
          color: var(--very-dark-blue);
          font-size: 2.5rem;
          font-family: "Fraunces", serif;
          margin: 0 auto;
          width: 70%;
        }

        p {
          width: 70%;
          margin: 5% auto;
          color: var(--very-dark-grayish);
        }

        .main-about__leader-more {
          position: relative;
          background-color: transparent !important;
          border-radius: 20px;
          margin-left: 15%;
          width: 155px;

          ::before {
            content: ".";
          }

          a {
            color: var(--very-dark-blue);
            font-family: "Fraunces", serif;
            font-weight: bold;
            font-size: 25px;
            position: absolute;
          }
        }

        .link__transform {
          box-shadow: 0 14px 2px #fff8bd;
          &:hover {
            box-shadow: 0 14px 2px var(--yellow);
          }
        }

        .link__stand {
          box-shadow: 0 14px 2px #ffdacf;
          &:hover {
            box-shadow: 0 14px 2px var(--red);
          }
        }
      }
    }
    .main-about__figure {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 785px) and (max-width: 1200px) {
    .main-about__container {
      .main-about__item {
        .main-about__description {
          h2 {
            font-size: 1.5rem;
          }

          a {
            font-size: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 784px) {
    .main-about__container {
      .main-about__item {
        flex-direction: column;

        .main-about__description {
          width: 100%;
          order: 2;
          margin-bottom: 20px;

          h2 {
            width: 90%;
            font-size: 1.8rem;
            text-align: center;
          }

          p {
            width: 80%;
            text-align: center;
          }

          .main-about__leader-more {
            margin: 0 auto;
          }
        }
      }

      .main-about__figure {
        width: 100%;
        order: 1;
      }
    }
  }
`;
