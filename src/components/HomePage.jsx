//imports
import React, { useState } from "react";
import "../index.css";
import "../App.css";
import LandingPage from "./LandingPage";
import Co2Graph from "./Co2Graph";
import Predictions from "./Predictions";

//HomePage element function
export default function HomePage() {
  const [active, setActive] = useState("Hide"); 
  
  return (
    <>
    
      <LandingPage />
      {/* CO2 level graph from year 2007 to 2021*/}
      <Co2Graph />
      {/* Predictions */}
      <div className="leadMagnet my-14 sm:px-2">
        <div className="hp-t leadMagnet-text mb-4">
          Wanna know how many people will be effected by Air Pollution?
        </div>
      </div>
      <div className="button">
        
      <button className="bg-red hover:bg-green text-white font-bold py-5 px-10  rounded-2xl" onClick={()=> setActive("Show") }>
          Yes
      </button>

      </div>
      <div>
      {active === "Show" && <Predictions /> }
      {active === "Hide" && <></>}
      </div>
    </>
  );
}
