import SearchResults from "../searchResults/searchResults";
import "./introPage.scss"
import axios from "axios"
import { useState } from 'react';

export default function IntroPage() {

    const [listOfAnime, setListOfAnime] = useState([])
    const [background, setBackground] = useState(true)
  
    const handleSubmit = (e)=>{
      setBackground(false)
      e.preventDefault()
      axios.get("http://localhost:3999/anime/slime").then((response)=>{
        setListOfAnime(response.data)
      })
    }

    return (
        <div className="introPage">
            <SearchResults listOfAnime={listOfAnime} setListOfAnime={setListOfAnime}/>
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
    )
}