import React from "react";
import SignUpForm from "./signup";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  error: null,
};

const SignUpPage = () => {
  const [state, setState] = React.useState(initialState);

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
    <SignUpForm handleSubmit={onSubmit} handleChange={onChange}></SignUpForm>
  );
};

export default SignUpPage;
