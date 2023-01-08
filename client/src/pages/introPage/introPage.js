import "./introPage.scss"
import SearchResults from "../../components/searchResults/searchResults";
import axios from "axios"
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function IntroPage() {

    const [listOfAnime, setListOfAnime] = useState([])
    const [background, setBackground] = useState(true)

    const initialValues = {
      "search": ""
    }

    const validationSchema = Yup.object().shape({
        search: Yup.string().required("You must input a search string")
    })
  
    const handleSubmit = (data)=>{
      setBackground(false)
      console.log(data)
      axios.get(`https://omars-entertainmentopedia-backend.yahia.space/anime/${data.search}`).then((response)=>{
        setListOfAnime(response.data)
      })
    }

    return (
        <div className="introPage">
            <SearchResults listOfAnime={listOfAnime} setListOfAnime={setListOfAnime}/>
            {background && <img src="assets/background.gif" alt=""/>}
            <h1>Omar's Entertainmentopedia</h1>
            
              <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form>
                  <div className='searchBar'>
                    <Field 
                      id="searchInput"
                      name="search"
                      placeholder="Search"
                    />
                    <button type="submit">
                      <img src="assets/search.svg" alt=""/>
                    </button>
                  </div>
                  <ErrorMessage name="search" component="span"/>
                </Form>
              </Formik>
            <div className="addButton">
              <form action="/add">
                <button>
                    <img src="assets/add.svg" alt=""/>
                </button>
              </form>
            </div>
      </div>
    )
}