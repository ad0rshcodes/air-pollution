import React from "react";
// Created by Adarsh Sharma
export default function Navbar() {
  return (
    <>
      <div class="Navbar flex justify-between mx-4 my-3 bg-transparent bg-opacity-50">
        <div className="logo flex">Logo</div>
        <div className="links flex">
          <a href="./" class="mx-2">
            Home
          </a>
          <a href="./" class="mx-2">
            Prevention
          </a>
          <a href="./" class="mx-2">
            Sources
          </a>
        </div>
      </div>
    </>
  );
}
