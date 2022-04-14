//imports
import "../index.css";
import "../App.css";
import LandingPage from "./LandingPage";
import Co2Graph from "./Co2Graph";
import Predictions from "./Predictions";

//HomePage element function
export default function HomePage() {
  return (
    <>
      <LandingPage />
      {/* CO2 level graph from year 2007 to 2021*/}
      <Co2Graph />
      {/* Predictions */}
      <Predictions />
    </>
  );
}
