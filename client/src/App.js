import './App.scss';
import axios from "axios"
import { useEffect } from 'react';

function App() {

  useEffect(()=>{

  }, [])

  return (
    <div className="App">
      <img src="assets/background.gif" alt=""/>
      <h1>Omar's Entertainmentopedia</h1>
      <div className='searchBar'>
        <form>
          <input type="search" placeholder="Search"/>
          <button type="search">
            <img src="assets/search.svg" alt=""/>
          </button>
        </form>
      </div>
      <div className="addButton">
        <button type="add">
          <img src="assets/add.svg" alt=""/>
        </button>
      </div>
    </div>
  );
}

export default App;
