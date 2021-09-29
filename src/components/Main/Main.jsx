import React from "react";
import MainAbout from "./MainAbout";
import MainHero from "./MainHero";
import MainClients from "./MainClients";
import MainGallery from "./MainGallery";

const Main = (props) => {
  return (
    <main>
      <MainAbout />
      <MainHero />
      <MainClients />
      <MainGallery />
    </main>
  );
};

export default Main;
