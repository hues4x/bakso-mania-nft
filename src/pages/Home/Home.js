import React from "react";
import Header from "../../components/Header/Header";
import About from "../../sections/About/About";
import Footer from "../../sections/Footer/Footer";
import HeaderMain from "../../sections/HeaderMain/HeaderMain";
import Timeline from "../../sections/Roadmap/Roadmap";
import Rarity from "../../sections/Rarity/Rarity";
import WhyBaksoMania from "../../sections/WhyBaksoMania/WhyBaksoMania";
import Solemen from "../../sections/Solemen/Solemen";
import SolForSolemen from "../../sections/SolForSolemen/SolForSolemen";
import Mint from "../../sections/Mint/Mint";
import GalleryImage from "../../sections/GalleryImage/GalleryImage";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderMain />
      <About />
      <GalleryImage />
      <Rarity />
      <WhyBaksoMania />
      <Solemen />
      <SolForSolemen />
      <Timeline />
      <Mint />
      <Footer />
    </>
  );
};

export default Home;
