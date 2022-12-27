import "./addPage.scss"
import SearchResults from "../../components/searchResults/searchResults";
import axios from "axios"
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';




function AddPage() {
  const [listOfAnime, setListOfAnime] = useState([])

  const initialValues = {
    "title": "",
    "rating": "",
    "img": ""
  }

  const validationSchema = Yup.object().shape({
      title: Yup.string().required("You must input a title"),
      rating: Yup.number("You must input a integer").integer("You must input an integer").min(0).max(10).required("You must input a number"),
      img: Yup.string().required("You must input a valid image link")
  })

  const handleSubmit = (data) =>{
    console.log(data)
    axios.post(`http://localhost:3999/anime`, data).then((response)=>{
      setListOfAnime([response.data])
    })
  }

  return (
    <div className="addPage">
      <div className="sampleResult">
        Sample Reults (if successful):
        <SearchResults listOfAnime={listOfAnime} setListOfAnime={setListOfAnime}/>
      </div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className="createForm">
                <Field 
                    id="titleInput"
                    name="title"
                    placeholder="Title"
                />
                <ErrorMessage name="title" component="span"/>
                <Field 
                    id="ratingInput"
                    name="rating"
                    placeholder="Rating"
                />
                <ErrorMessage name="rating" component="span"/>
                <Field 
                    id="imgInput"
                    name="img"
                    placeholder="Image"
                />
                <ErrorMessage name="img" component="span"/>
                <button type="submit">
                    <img src="assets/add.svg" alt=""/>
                </button>
            </Form>
        </Formik>
        <div className="backButton">
            <form action="/">
              <button>
                  <img src="assets/back.svg" alt=""/>
              </button>
            </form>
          </div>
    </div>
  )
}

export default AddPage
