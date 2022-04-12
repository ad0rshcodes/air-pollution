import React from "react";

export default function LandingPage() {
  return (
    <div className="flex items-center">
      <div className="landingPageText mx-6">
        <div className="slogan font-bold text-4xl my-2">
          <div className="text-6xl green">Go Green,</div>
          There is no Planet B!!
        </div>
        <div className="description my-2">
          Air pollution is an issue that has been plaguing the world for a long
          time now and its detrimental effects urge us to find ways to predict
          and prevent further damage. According to WHO....
        </div>
      </div>

      <img
        src={require("../images/landingImage.jpg")}
        alt=""
        className="object-cover h-3/6 rounded-lg"
      />
    </div>
  );
}
