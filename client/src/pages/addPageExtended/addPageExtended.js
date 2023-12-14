import "./addPageExtended.scss";
import SearchResults from "../../components/searchResults/searchResults";
import StarRating from "../../components/starRating/starRating";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddPageExtended() {
  const [listOfAnime, setListOfAnime] = useState([]);
  const { state } = useLocation();
  const { malEntry } = !!(state) ? state : {};

  const initialValues = {
    title: !!(malEntry) ? malEntry.title : "",
    rating: !!(malEntry) ? Math.round(malEntry.rating) : "",
    img: !!(malEntry) ? malEntry.img : "",
    link: !!(malEntry) ? malEntry.link : "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a title"),
    rating: Yup.number()
      .integer()
      .min(0)
      .max(10)
      .required("You must select a star rating"),
    img: Yup.string().required("You must input a valid image link"),
    link: Yup.string().required(
      "please input a valid link to a website with more info"
    ),
  });

  const handleSubmit = (data) => {
    console.log(data);
    axios
      .post(`https://omars-entertainmentopedia-backend.yahia.space/anime`, data)
      .then((response) => {
        setListOfAnime([response.data]);
      });
  };

  return (
    <div className="addPageExtended">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="createForm">
          <Field id="fieldEntry" name="title" placeholder="Title" type="text" defaultValue={!!(malEntry) ? malEntry.title : ""}/>
          <ErrorMessage name="title" component="span"/>
          Rating:
          <Field
            id="fieldEntry"
            placeholder="Rating"
            name="rating"
            as={StarRating}
            defaultValue={Math.round(!!(malEntry) ? malEntry.rating : "")}
          />
          <ErrorMessage name="rating" component="span"/>
          <Field id="fieldEntry" name="img" placeholder="Image" defaultValue={!!(malEntry) ? malEntry.img : ""}/>
          <ErrorMessage name="img" component="span" />
          <Field id="fieldEntry" name="link" placeholder="Link" defaultValue={!!(malEntry) ? malEntry.link : ""}/>
          <ErrorMessage name="link" component="span"/>
          <button type="submit">
            <img src="assets/add.svg" alt="" />
          </button>
        </Form>
      </Formik>
      <div className="backButton">
        <form action="/">
          <button>
            <img src="assets/back.svg" alt="" />
          </button>
        </form>
      </div>
      <div className="sampleResult">
        Sample Reults (if successful):
        <SearchResults
          listOfAnime={listOfAnime}
          toAdd={false}
        />
      </div>
    </div>
  );
}

export default AddPageExtended;
