import "./loginPage.scss";
import axios from "axios";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
  const initialValues = {
    search: "",
  };

  const validationSchema = Yup.object().shape({
    search: Yup.string().required("You must input a search string"),
  });

  const handleSubmit = (data) => {
    
  };

  return (
    <div className="loginPage">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="searchBar">
            <Field id="username" name="username" placeholder="Search"/>
            <Field id="password" name="password" placeholder="Search"/>
          </div>
          <ErrorMessage name="search" component="span" />
        </Form>
      </Formik>
      <div className="addButton">
        <form action="/add">
          <button>
            <img src="assets/add.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
