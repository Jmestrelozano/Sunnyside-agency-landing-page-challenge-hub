import styled from "styled-components";
import "../../style-guide.css";

export const ComponentClients = styled.section`
  padding: 10%;

  h2 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10%;
    color: var(--grayish-blue);
    font-size: 1.5rem;
    font-family: "Fraunces", serif;
  }

  .main-clients__container {
    display: flex;
    justify-content: space-between;

    .main-clients__box {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        border-radius: 50%;
      }

      .main-clients__text {
        margin: 15% 0;
        text-align: center;
        width: 100%;
        color: var(--very-dark-blue);
        font-family: "Barlow", sans-serif;
        line-height: 1.5;
        font-size: 17px;
        flex-grow: 1;
      }

      .main-clients__author {
        h3 {
          font-family: "Fraunces", serif;
        }

        p {
          margin-top: 12px;
          color: var(--grayish-blue);
        }
      }
    }

    .Thomas {
      margin: 0 30px;
    }
  }

  .main-clients__gallery {
    display: flex;
    img {
      width: 50%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .main-clients__container {
      flex-wrap: wrap;
      .main-clients__box {
        margin-bottom: 30px;
        .main-clients__text {
          font-size: 12px;
          width: 60%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: 1.2rem;
      margin-top: 20px;
    }
    .main-clients__container {
      flex-direction: column;

      .main-clients__box {
        width: 100%;

        .main-clients__text {
          margin: 10% auto;
          font-size: 16px;
        }

        .main-clients__author {
          margin-bottom: 20px;
          text-align: center;
        }
      }

      .Thomas {
        margin: 40px 0;
      }
    }
  }
`;
