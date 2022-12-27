import './App.scss';
import IntroPage from './pages/introPage/introPage';
import AddPage from './pages/addPage/addPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<IntroPage/>}/>
          <Route path="/add" exact element={<AddPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
