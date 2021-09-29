import React from "react";
import { ComponentClients } from "./css/MainClients";

import ImageEmily from "./img/image-emily.jpg";
import ImageThomas from "./img/image-thomas.jpg";
import ImageJennie from "./img/image-jennie.jpg";

const MainClients = (props) => {
  return (
    <ComponentClients className="main-clients">
      <h2> Client testimonials</h2>
      <div className="main-clients__container">
        {/*Box - Emily */}
        <div className="main-clients__box">
          <img src={ImageEmily} alt="img-emily" />
          <p className="main-clients__text">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="main-clients__author">
            <h3>Emily R.</h3>
            <p> Marketing Director</p>
          </div>
        </div>

        {/*Box - Thomas */}
        <div className="main-clients__box Thomas">
          <img src={ImageThomas} alt="img-thomas" />
          <p className="main-clients__text">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience
          </p>
          <div className="main-clients__author">
            <h3>Thomas S.</h3>
            <p>Chief Operating Officer</p>
          </div>
        </div>

        {/*Box - Jennie */}
        <div className="main-clients__box">
          <img src={ImageJennie} alt="img-Jennie" />
          <p className="main-clients__text">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="main-clients__author">
            <h3>Jennie F.</h3>
            <p>Business Owner</p>
          </div>
        </div>
      </div>
    </ComponentClients>
  );
};

export default MainClients;
