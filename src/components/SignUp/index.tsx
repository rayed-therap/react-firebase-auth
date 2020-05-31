import React from "react";
import SignUpForm from "./signup";

const SignUpPage = () => {
  const onSubmit: React.ChangeEventHandler<HTMLFormElement> = (event) => {
    console.log(event);
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event);
  };

  return (
    <SignUpForm handleSubmit={onSubmit} handleChange={onChange}></SignUpForm>
  );
};

export default SignUpPage;
