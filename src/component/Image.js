import React from "react";
import "./Image.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import image1 from "./../Images/1.jpg";
import image2 from "./../Images/2.jpg";
import image3 from "./../Images/3.png";

function Image() {
  return (
    <div className="w-full z-0 h-full ">
      {/* <img className="h-screen w-full img__" src={image1} alt="3d" /> */}
      <AwesomeSlider
        bullets={false}
        fillParent={true}
        className="h-screen w-full"
        animation="cubeAnimation"
      >
        <div
          data-src={image1}
          className="w-full h-full flex flex-row justify-center items-end"
        >
          <p className="hover:bg-red-700 duration-700 bg-gray-800 select-none text-white font-bold font-mono rounded-full opacity-70 px-5 py-3 text-2xl m-16 shadow-xl">
            The explorer - Exploring the earth
          </p>
        </div>
        <div
          data-src={image2}
          className="w-full h-full flex flex-row justify-center items-end"
        >
          <p className="hover:bg-red-700 duration-700 bg-gray-800 select-none text-white font-bold font-mono rounded-full opacity-70 px-5 py-3 text-2xl m-16 shadow-xl">
            Gifted by Alien from another universe
          </p>
        </div>
        <div
          data-src={image3}
          className="w-full h-full flex flex-row justify-center items-end"
        >
          <p className="hover:bg-red-700 duration-700 bg-gray-800 select-none text-white font-bold font-mono rounded-full opacity-70 px-5 py-3 text-2xl m-16 shadow-xl">
            The explorer - Exploring the earth
          </p>
        </div>
      </AwesomeSlider>
    </div>
  );
}

export default Image;
