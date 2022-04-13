import React from "react";

export default function LandingPage() {
  return (
    <div className="flex items-center justify-around">
      <div className="landingPageText mx-6 ">
        <div className="slogan font-bold text-4xl my-2">
          Be a part of the
          <span className="text-6xl green"> solution, </span>
          not part of the
          <span className="text-6xl red"> Problem </span>
        </div>
        <div className="description my-2">Description</div>
      </div>

      <img
        src={require("../images/landingImage.jpg")}
        alt=""
        className="object-cover h-3/6 rounded-lg"
      />
    </div>
  );
}
