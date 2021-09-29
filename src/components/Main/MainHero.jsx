import React from "react";
import { ComponentHero } from "./css/MainHero";

import imageGraphic from "./img/image-graphic-design.jpg";
import imagePhotography from "./img/image-photography.jpg";

const MainHero = (props) => {
  return (
    <ComponentHero className="main-hero">
      <div className="main-hero__container">
        {/* Graphic design */}
        <figure className="main-hero__hero">
          <img src={imageGraphic} alt="img-graphic-design-hero" />

          <figcaption>
            <h2 className="main-hero__hero--text-dark"> Graphic design</h2>
            <p className="main-hero__hero--text-dark">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </figcaption>
        </figure>

        {/* Photography */}
        <figure className="main-hero__hero">
          <img src={imagePhotography} alt="img-graphic-design-hero" />

          <figcaption>
            <h2 className="main-hero__hero--text-blue"> Photography</h2>
            <p className="main-hero__hero--text-blue">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </figcaption>
        </figure>
      </div>
    </ComponentHero>
  );
};

export default MainHero;
