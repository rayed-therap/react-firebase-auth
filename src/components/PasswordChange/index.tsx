import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FirebaseContext } from "../Firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type StateProps = {
  password: string;
  confirmPassword: string;
  error: any;
};
const INITIAL_STATE: StateProps = {
  password: "",
  confirmPassword: "",
  error: null,
};

const PasswordChangePage = () => {
  const classes = useStyles();
  const [state, setState] = useState(INITIAL_STATE);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  const onSubmit: React.ChangeEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    firebase
      ?.doPasswordUpdate(state.password)
      ?.then(() => {
        setState({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      ?.catch((error) => {
        setState({
          ...state,
          error: error,
        });
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        {state.error && (
          <Typography component="p" variant="body1">
            {state.error.message}
          </Typography>
        )}
        <form onSubmit={onSubmit} className={classes.form} noValidate>
          <TextField
            onChange={onChange}
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            margin="normal"
            autoFocus
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="confirm-password"
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Change Password
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" component={RouterLink} to={ROUTES.LANDING}>
            Sector18
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Container>
  );
};

export default PasswordChangePage;
