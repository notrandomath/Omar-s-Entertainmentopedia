import "./loginPage.scss";
import { useState } from "react";
import UserPool from "./UserPool";
import { useSignIn } from "react-auth-kit";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { FaBatteryQuarter } from "react-icons/fa";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("")
  const signIn = useSignIn();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("You must input a username"),
    password: Yup.string().required("You must input a password"),
  });

  const handleSubmit = (data) => {
    const user = new CognitoUser({
      Username: data.username,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Useranme: data.username,
      Password: data.password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (response) => {
        console.log("OnSuccess: ", response);
        signIn({
          token: response.getAccessToken().getJwtToken(),
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { username: data.username }
        });
      },
      onFailure: (err) => {
        console.error("On Failure: ", err);
        setErrorMessage(err.message)
      },
      newPasswordRequired: (data) => {
        console.log("New Password Required: ", data);
        setErrorMessage("New Password Required")
      },
    });
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
            <Field
              id="fieldEntry"
              name="username"
              placeholder="Username"
              as={TextField}
            />
          </div>
          <ErrorMessage name="username" component="span" />
          <div id="fieldEntryContainer">
            <Field
              id="fieldEntry"
              name="password"
              placeholder="Password"
              type="password"
              as={TextField}
            />
          </div>
          <ErrorMessage name="password" component="span" />
          <Button type="submit" variant="contained">
            Login
          </Button>
          {errorMessage === "" ? <div></div> : <span>{errorMessage}</span>}
        </Form>
      </Formik>
    </div>
  );
}
