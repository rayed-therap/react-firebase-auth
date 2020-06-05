import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../Navigation";
import * as ROUTES from "../../constants/routes";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import AccountPage from "../Account";
import HomePage from "../Home";
import AdminPage from "../Admin";
import PasswordForgetPage from "../PasswordForget";
import { FirebaseContext } from "../Firebase";

const App = () => {
  const firebase = useContext(FirebaseContext);
  const [authUser, setAuthUser] = useState<firebase.User | null>(null);

  firebase?.auth.onAuthStateChanged((authUser) => setAuthUser(authUser));

  return (
    <Router>
      <div>
        <Navigation authUser={authUser} />
        <hr />
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
