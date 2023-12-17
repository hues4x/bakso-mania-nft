import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="gradient">
        <h3>WHAT ARE BAKSO MANIACS?</h3>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-10 col-11 d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="1000"
          >
            <p>
              Bakso Mania is a collection of randomly generated NFTs known as
              Bakso Maniacs on the Solana Blockchian. The 1st generation consist
              of 10,000 randomly assembled Bakso. Bakso have a variety of
              rarity, expressions, and colors! Bakso traditionally is an
              Indonesian noodle and meat ball cuisine, but these Bakso Maniacs
              jumped out of the cooking pots ready to explore the world of Bakso
              Mania. Be sure to get your own!
            </p>
            <a href="#" target="blank" className="primaryBtn about">
              CONNECT WALLET
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
