//imports
import React from "react";

//Navbar element function
export default function Navbar() {
  return (
    <>
      <div class="flex justify-between my-3 text-lg	">
        <div className="logo flex">Logo</div>
        <div className="links flex space-x-4">
          <a href="/" class="">
            Home
          </a>
          <a href="/preventionpage" class="">
            Prevention
          </a>
          <a href="/sources" class="">
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
