//imports
import React from "react";

//Navbar element function
export default function Navbar() {
  return (
    <>
      <div className="flex justify-between my-3 text-lg	sticky top-0 z-50">
        <div className="logo flex">Logo</div>
        <div className="links flex space-x-4">
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
