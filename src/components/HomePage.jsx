import "../index.css";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Co2Graph from "./Co2Graph";
import Form from "./Form";

export default function HomePage(){
    return(
        <>
        <LandingPage/>
        <Co2Graph/>
        <Form/>
        </>
    );
}