import React from "react";
import { ComponentGalley } from "./css/MainGallery";

//image gallery
import ImageMilk from "./img/image-gallery-milkbottles.jpg";
import ImageOrange from "./img/image-gallery-orange.jpg";
import ImageCone from "./img/image-gallery-cone.jpg";
import ImageSugar from "./img/image-gallery-sugarcubes.jpg";

const MainGallery = (props) => {
  return (
    <ComponentGalley className="main-clients__gallery">
      <img src={ImageMilk} alt="gallery-milkbottles" />
      <img src={ImageOrange} alt="gallery-orange" />
      <img src={ImageCone} alt="gallery-cone" />
      <img src={ImageSugar} alt="gallery-sugar" />
    </ComponentGalley>
  );
};

export default MainGallery;
