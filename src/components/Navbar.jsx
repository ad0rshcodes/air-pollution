//imports
import React from "react";

//Navbar element function
export default function Navbar() {
  return (
    <>
      <div className="flex justify-between  text-xl	fixed top-0 left-2 right-0 bg-blue ">
        {/* Logo */}
        <div className="lp-l logo flex my-3 ">
          <a href="/">
            <img src={require("../images/final.png")} alt="" />
          </a>
        </div>

        {/* Navbar Links */}
        <div className="links flex m-4 space-x-4">
          <a href="/" className="">
            Home
          </a>
          <a href="/preventionpage" className="">
            Prevention
          </a>
          <a href="/sources" className="">
            Sources
          </a>
        </div>
        <div className="team">
          <a href="./"></a>
        </div>
      </div>
    </>
  );
}
