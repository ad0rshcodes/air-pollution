//imports
import React from "react";

//LandingPage Element function
export default function LandingPage() {
  return (
    <div className="flex items-center justify-around landing ">
      <div className="landingPageText mx-6 ">
        <div className="slogan font-bold text-4xl my-20">
          Be a part of the
          <span className="text-6xl green"> solution, </span>
          not part of the
          <span className="text-6xl red"> Problem </span>
        </div>
        <div className="description my-2 text-lg">
          Air pollution kills an estimated{" "}
          <span className="red font-semibold"> 7 million </span>people worldwide
          every year. WHO data shows that almost all of the global population
          (99%) breathe air that exceeds WHO guideline limits containing high
          levels of pollutants, with low- and middle-income countries suffering
          from the highest exposures.
          <br />
          From smog hanging over cities to smoke inside the home, air pollution
          poses a major threat to health and climate. The combined effects of
          ambient (outdoor) and household air pollution cause
          <span className="red font-semibold"> millions </span> of premature
          deaths every year, largely as a result of increased mortality from
          stroke, heart disease, chronic obstructive pulmonary disease, lung
          cancer and acute respiratory infections.
          {/* Air Pollution facts */}
          <ul className="list-disc mt-4 list-inside">
            <li>
              <span className="red font-semibold">3.8 millions </span>deaths
              every year as a result of household exposure to smoke.
            </li>
            <li>
              <span className="red font-semibold">4.2 million </span> deaths
              every year due to exposure to ambient air pollution.
            </li>
            <li>
              <span className="red font-semibold">9 out of 10</span> worldwide
              live in places where air quality exceeds WHO guideline limits.
            </li>
          </ul>
        </div>
      </div>

      {/* Landing Image */}
      <img
        src={require("../images/landingImage.jpg")}
        alt=""
        className="object-cover w-1/3 rounded-lg mt-10 landingImage"
      />
    </div>
  );
}
