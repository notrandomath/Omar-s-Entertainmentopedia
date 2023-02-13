import "./App.scss";
import IntroPage from "./pages/introPage/introPage";
import AddPage from "./pages/addPage/addPage";
import AddPageExtended from "./pages/addPageExtended/addPageExtended";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
    // fetches darkmode from storage if it exists otherwise it's null
    const storedDarkmode = localStorage.getItem('darkmode');
    const [darkMode, setDarkMode] = useState(
     storedDarkmode != null ? storedDarkmode==="true" :
      // checks if darkmode is enabled on browser for default state
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    // keeps darkmode persistent
    useEffect(() => {
      localStorage.setItem('darkmode', darkMode);
      document.documentElement.style.backgroundColor = darkMode ? "black" : "white"
    }, [darkMode]);

  return (
    <div className="app">
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Router>
          <Routes>
            <Route path="/" exact element={<IntroPage />} />
            <Route path="/add" exact element={<AddPage />} />
            <Route path="/add-extended" exact element={<AddPageExtended />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
