import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import pics from "./carousel";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./carousel", false, /\.(png|jpe?g|svg)$/)
);

const Slideshow2 = () => {
  const [autoplay, setAutoplay] = useState(true);
  //   const images = [
  //     pics,
  //     // "carousel/AlexandreTheodore.jpg",
  //     // "carousel/AnacharsisCloots.jpg",
  //     // "carousel/AntoineQuentinFouquierTinville.jpg",
  //   ];

  return (
    <div>
      <Container fixed>
        <div>
          <Slide autoplay={autoplay}>
            {/* {images.map((each, index) => (
            <img
              key={index}
              style={{ width: "100%" }}
              src={each}
              alt="bananapics"
            />
          ))} */}
            <img
              src={images["AnacharsisCloots.jpg"]}
              alt="banana"
              style={{ width: "20%" }}
            />
            <img
              src={images["AlexandreTheodore.jpg"]}
              alt="banana"
              style={{ width: "20%" }}
            />
            <img
              src={images["AntoineQuentinFouquierTinville.jpg"]}
              alt="banana"
              style={{ width: "20%" }}
            />
          </Slide>
          <Slide autoplay={autoplay}>
            <img
              src={images["AntoineQuentinFouquierTinville.jpg"]}
              alt="banana"
              style={{ maxHeight: "200px" }}
            />
            <img
              src={images["AnacharsisCloots.jpg"]}
              alt="banana"
              style={{ maxHeight: "200px" }}
            />
            <img
              src={images["AlexandreTheodore.jpg"]}
              alt="banana"
              style={{ maxHeight: "200px" }}
            />
          </Slide>
        </div>
      </Container>
    </div>
  );
};

export default Slideshow2;
