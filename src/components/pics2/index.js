import React, { useState } from "react";
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
      <img src="carousel/Anacharsis Cloots.jpg" alt="banana" />
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
            style={{ width: "50%" }}
          />
        </Slide>
      </div>

      <div className="autoplay-buttons">
        Autplay is {autoplay ? "on" : "off"}
      </div>
      <div className="autoplay-buttons">
        <button type="button" onClick={() => setAutoplay(false)}>
          Pause
        </button>
        <button type="button" onClick={() => setAutoplay(true)}>
          Play
        </button>
      </div>
    </div>
  );
};

export default Slideshow2;
