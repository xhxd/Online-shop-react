import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import image1 from "./images/slideshowImage1.jpg";
import image2 from "./images/slideshowImage2.jpg";
import image3 from "./images/slideshowImage3.jpg";

function Slideshow() {
  const imgArr = [image1, image2, image3];

  const [renderCount, setRenderCount] = useState(0);
  const [currentImage, setCurrentImage] = useState(imgArr[renderCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRenderCount((prevCount) => prevCount + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (renderCount > 2) {
    setRenderCount(0);
  }

  if (renderCount < 0) {
    setRenderCount(2);
  }

  useEffect(() => {
    setCurrentImage(imgArr[renderCount]);
  }, [renderCount]);

  return (
    <div className="slideshow">
      <div className="slideshow__container">
        {/*Full width image with number and caption*/}
        <div className="mySlides fade">
          <img src={currentImage} alt="" />
        </div>

        <a
          className="prev"
          onClick={() => {
            setRenderCount((prevCount) => prevCount - 1);
          }}
        >
          &#10094;
        </a>
        <a
          className="next"
          onClick={() => {
            setRenderCount((prevCount) => prevCount + 1);
          }}
        >
          &#10095;
        </a>
      </div>

      {/*The dots/circles*/}
      <div style={{ textAlign: "center" }} class="all__dots">
        <span
          className={renderCount === 0 ? "active" : "dot"}
          onClick={() => {
            setRenderCount(0);
          }}
        ></span>
        <span
          className={renderCount === 1 ? "active" : "dot"}
          onClick={() => {
            setRenderCount(1);
          }}
        ></span>
        <span
          className={renderCount === 2 ? "active" : "dot"}
          onClick={() => {
            setRenderCount(2);
          }}
        ></span>
      </div>
    </div>
  );
}

export default Slideshow;
