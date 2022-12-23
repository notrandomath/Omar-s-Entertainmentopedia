import './App.scss';
import axios from "axios"
import { useState } from 'react';

function App() {

  const [listOfAnime, setListOfAnime] = useState([])
  const [background, setBackground] = useState(true)

  const handleSubmit = (e)=>{
    setBackground(false)
    e.preventDefault()
    axios.get("http://localhost:3999/anime").then((response)=>{
      setListOfAnime(response.data)
    })
  }

  return (
    <div className="App">
      <div className="anime">
        {listOfAnime.map((value, key) => {
          return <div className="animeEntry">
            <div className="left">
              <h3>{value.title}</h3>
              rating: {value.rating}/10
            </div>
            <div className="right">
              <img src={value.img} alt=""/>
            </div>
          </div>;
        })}
      </div>
      {background && <img src="assets/background.gif" alt=""/>}
      <h1>Omar's Entertainmentopedia</h1>
      <div className='searchBar'>
        <form onSubmit={handleSubmit}>
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
