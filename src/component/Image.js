import React from "react";
import "./Image.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Image({ img, dropIcon, comment }) {
  return (
    <div
      className="showcase h-screen flex flex-col-reverse justify-start items-center"
      style={{
        scrollSnapAlign: "start",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {dropIcon && (
        <div className="">
          {" "}
          <ExpandMoreIcon
            style={{ width: "3rem", height: "3rem" }}
            className="text-white p-15 opacity-60 animate-bounce "
          />
        </div>
      )}
      <p className=" hover:bg-red-400 duration-500 px-10 py-3 mb-10 bg-gray-300 opacity-90 rounded-full font-semibold text-black">
        {comment}
      </p>
    </div>
  );
}

export default Image;
