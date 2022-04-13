import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Co2Graph from "./components/Co2Graph";
import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreventionPage from "./components/PreventionPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/PreventionPage" element={<PreventionPage />}></Route>
      </Routes>
      <div className="main App flex flex-col h-screen justify-between px-8">
        <Navbar />
        <LandingPage />
        <Co2Graph />
        <Form />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
