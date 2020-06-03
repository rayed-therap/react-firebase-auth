import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Header from "./navbar";

const Navigation = () => {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
