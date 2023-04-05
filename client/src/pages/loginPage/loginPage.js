import "./loginPage.scss";
import axios from "axios";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";

export default function LoginPage() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("You must input a username"),
    password: Yup.string().required("You must input a password"),
  });

  const handleSubmit = (data) => {
    console.log("happened");
  };

  return (
    <div className="loginPage">
      <h1>Please login to continue</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="loginForm">
          <div id="fieldEntryContainer">
            <Field id="fieldEntry" name="username" placeholder="Username" as={TextField}/>
          </div>
          <ErrorMessage name="username" component="span"/>
          <div id="fieldEntryContainer">
            <Field id="fieldEntry" name="password" placeholder="Password" as={TextField}/>
          </div>
          <ErrorMessage name="password" component="span"/>
          <Button type="submit" variant="contained">Login</Button>
        </Form>
      </Formik>
    </div>
  );
}
