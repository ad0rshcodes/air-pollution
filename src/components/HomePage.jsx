//imports
import "../index.css";
import "../App.css";
import LandingPage from "./LandingPage";
import Co2Graph from "./Co2Graph";
import Form from "./Form";

//HomePage element function
export default function HomePage(){
    return(
        <>
        <LandingPage/>
        <Co2Graph/>
        <Form/>
        </>
    );
}