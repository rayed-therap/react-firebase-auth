import React from "react";
import SignUpForm from "./signup";

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

  const onSubmit: React.ChangeEventHandler<HTMLFormElement> = (event) => {
    console.log(event);
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
