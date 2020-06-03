import React, { useContext } from "react";
import SignUpForm from "./signup";
import { FirebaseContext } from "../Firebase";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: null,
};

const SignUpPage = () => {
  const [state, setState] = React.useState(initialState);

  const isInvalid: boolean =
    state.username === "" ||
    state.email === "" ||
    state.password === "" ||
    state.confirmPassword === "";

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const firebase = useContext(FirebaseContext);

  const onSubmit: React.ChangeEventHandler<HTMLFormElement> = (event) => {
    const email = "email";
    const password = "pass";

    firebase?.doCreateUserWithEmailAndPassword(email, password);
  };

  return (
    <SignUpForm
      isInvalid={isInvalid}
      handleSubmit={onSubmit}
      handleChange={onChange}
    ></SignUpForm>
  );
};

export default SignUpPage;
