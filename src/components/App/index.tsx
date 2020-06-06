import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../Navigation";
import * as ROUTES from "../../constants/routes";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import AccountPage from "../Account";
import HomePage from "../Home";
import AdminPage from "../Admin";
import PasswordForgotPage from "../PasswordForgot";
import { AuthProvider } from "../Session";
import { FirebaseProvider } from "../Firebase";

const App = () => {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <Router>
          <Navigation />
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
              path={ROUTES.PASSWORD_FORGOT}
              component={PasswordForgotPage}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </FirebaseProvider>
  );
};

export default App;
