import "./App.scss";
import IntroPage from "./pages/introPage/introPage";
import AddPage from "./pages/addPage/addPage";
import AddPageExtended from "./pages/addPageExtended/addPageExtended";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<IntroPage />} />
          <Route path="/add" exact element={<AddPage/>} />
          <Route path="/add-extended" exact element={<AddPageExtended/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
