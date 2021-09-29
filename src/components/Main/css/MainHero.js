import styled from "styled-components";
import "../../style-guide.css";

export const ComponentHero = styled.section`
  .main-hero__container {
    display: flex;

    .main-hero__hero {
      position: relative;

      img {
        width: 100%;
      }

      figcaption {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);

        h2 {
          font-family: "Fraunces", serif;
          text-align: center;
          width: 100%;
          margin: 0 auto 30px auto;
        }

        p {
          text-align: center;
          margin: 0 auto;
          width: 100%;
          font-family: "Barlow", sans-serif;
          font-size: 16px;
          line-height: 1.5;
        }

        .main-hero__hero--text-dark {
          color: var(--dark);
        }
        .main-hero__hero--text-blue {
          color: var(--very-dark-blue);
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .main-hero__container {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1024px) {
    .main-hero__container {
      .main-hero__hero {
        margin-bottom: -20px;

        width: 100%;

        figcaption {
          bottom: 40px;
          h2 {
            margin-bottom: 10px;
          }
          p {
            font-size: 12px;
            width: 260px;
          }
        }
      }
    }
  }
`;
