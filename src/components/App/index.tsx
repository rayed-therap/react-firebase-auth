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
      <Navigation authUser={authUser} />
      <hr />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
        <Route
          exact
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
      </Switch>
    </Router>
  );
};

export default App;
