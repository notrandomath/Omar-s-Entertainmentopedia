import "./addPage.scss";
import SearchBar from "../../components/searchBar/searchBar";
import SearchResults from "../../components/searchResults/searchResults";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import axios from "axios";
import rateLimit from "axios-rate-limit";
import * as Yup from "yup";

function renameKey(obj, oldKey, newKey) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}

function renameImage(obj) {
  obj["img"] = obj["images"]["jpg"]["image_url"];
  delete obj["images"];
}

export default function AddPage() {
  const [listOfAnime, setListOfAnime] = useState([]);

  const initialValues = {
    search: "",
  };

  const validationSchema = Yup.object().shape({
    search: Yup.string().required("You must input a search string"),
  });

  const http = rateLimit(axios.create(), { maxRequests: 1, maxRPS: 1 });

  const handleSubmit = (data) => {
    console.log(data);
    http
      .get(`https://api.jikan.moe/v4/anime?q=${data.search}`)
      .then((response) => {
        console.log(response.data);
        const arr = response.data.data;
        arr.forEach((obj) => renameKey(obj, "url", "link"));
        arr.forEach((obj) => renameKey(obj, "score", "rating"));
        arr.forEach((obj) => renameImage(obj));
        //sorts by popularity (amount of members)
        arr.sort(function(a, b) {
            var x = a["members"]; var y = b["members"];
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        });
        setListOfAnime(arr);
      });
  };

  return (
    <div className="addPage">
      <h1>Add Anime from MyAnimeList:</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="searchBar">
            <Field
              id="searchInput"
              name="search"
              placeholder="Search"
              as={SearchBar}
            />
          </div>
          <ErrorMessage name="search" component="span" />
        </Form>
      </Formik>
      <div className="backButton">
        <form action="/">
          <button>
            <img src="assets/back.svg" alt="" />
          </button>
        </form>
      </div>
      <h3>Sample Reults (if successful):</h3>:
      <SearchResults
        listOfAnime={listOfAnime}
        toAdd={true}
      />
      <div className="addExtendedButton">
        <form action="/add-extended">
          <button>
            <p>Can't find results? Click to directly navigate to advanced add page.</p>
          </button>
        </form>
      </div>
    </div>
  );
}
