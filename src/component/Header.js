import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

function Header() {
  return (
    <div className="z-50 sm:text-xl text-sm bg-gray-300 bg-opacity-50 fixed w-full p-3 flex flex-row justify-between">
      <p className="mx-3 font-medium">3D Render Showcase</p>
      <div
        style={{
          fontWeight: 200,
        }}
        className="flex flex-row items-center"
      >
        <p>By - Subhadip</p>
        <a
          className="flex flex-row items-center"
          href="https://www.instagram.com/subhadippal66/"
          target="_blank"
        >
          <InstagramIcon className=" hover:text-red-400 duration-300 sm:mx-5 mx-3" />
        </a>
        <a
          className="flex flex-row items-center"
          href="https://github.com/subhadippal66"
          target="_blank"
        >
          <GitHubIcon className=" hover:text-red-400 duration-300 mr-3" />
        </a>
      </div>
    </div>
  );
}

export default Header;
