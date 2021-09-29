import React from "react";
import ImageTransform from "./img/image-transform.jpg";
import ImageStand from "./img/image-stand-out.jpg";
import { AboutComponent } from "./css/MainAbout";

const MainAbout = (props) => {
  return (
    <AboutComponent className="main-about">
      <div className="main-about__container">
        {/*Transform your brand */}
        <div className="main-about__item">
          <div className="main-about__description">
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <div className="main-about__leader-more link__transform">
              <a href=" #">Learn more</a>
            </div>
          </div>

          <figure className="main-about__figure">
            <img src={ImageTransform} alt="Transform - img" />
          </figure>
        </div>

        {/* Stand out to the right audience */}
        <div className="main-about__item">
          <figure className="main-about__figure">
            <img src={ImageStand} alt="Stand - img" />
          </figure>
          <div className="main-about__description">
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <div className="main-about__leader-more link__stand">
              <a href=" #">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </AboutComponent>
  );
};

export default MainAbout;
