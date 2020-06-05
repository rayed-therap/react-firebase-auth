import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignOutButton = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={() => {
        firebase
          ?.doSignOut()
          .then(() => {
            history.push(ROUTES.LANDING);
          })
          .catch((error) => console.log(error));
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
