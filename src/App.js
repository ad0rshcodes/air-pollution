//imports
import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreventionPage from "./components/PreventionPage";
import Sources from "./components/Sources";
import NotFound from "./components/NotFound";

//main function app
function App() {
  return (
    //routing logics
    <Router>
      <div className="main App flex flex-col h-screen justify-between px-8">
      <Navbar />
      <Routes>
        <Route exact path="/preventionpage" element={<PreventionPage />}></Route>
      </Routes>
      <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/sources" element={<Sources/>}></Route>
      </Routes>
      <Routes>
        <Route path="*" element = {<NotFound/>} />
      </Routes>
        
      <Footer />
      </div>
    </Router>
  );
}

export default App;
