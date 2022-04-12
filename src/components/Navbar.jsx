import React from "react";
// Created by Adarsh Sharma
export default function Navbar() {
  return (
    <>
      <div class="flex justify-between my-3">
        <div className="logo flex">Logo</div>
        <div className="links flex space-x-4">
          <a href="./" class="">
            Home
          </a>
          <a href="./" class="">
            Prevention
          </a>
          <a href="./" class="">
            Sources
          </a>
        </div>
        <div className="team">
          <a href="./">Team</a>
        </div>
      </div>
    </>
  );
}
