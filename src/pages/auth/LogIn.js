import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Paper,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";

import api from "../../api";
import owl from "./owl.jpeg";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#fdfbf7",
    maxWidth: "70vw",
    maxHeight: "80vh",
    margin: "auto",
    marginTop: "2rem",
    padding: "25px",
    display: "flex",
    "@media (max-width: 620px)": {
      minHeight: "70vh",
      width: "100vw",
      padding: "5px",
      flexDirection: "column",
      maxHeight: "200vh",
    },
  },
  welcome: {
    width: "50%",
    "@media (max-width: 620px)": {
      padding: "10px",
      // display: "flex",
      // alignItems: "center",
      width: "90%",
      margin: "auto",
    },
  },
  img: {
    "@media (max-width: 620px)": {
      width: "10rem",
    },
  },
  title: {
    "@media (max-width: 620px)": {
      // fontSize: "1.5rem"
      display: "none",
    },
  },
  auth: {
    width: "50%",
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 620px)": {
      marginTop: 4,
      width: "90%",
      margin: "auto",
    },
  },
}));

export default function Login() {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(true)
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    validateLogin();
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    validateLogin();
  };

  const validateLogin = () => {
    if (validEmail.test(email) && password.length > 4) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleKeypressLogin = (e) => {
    if (e.code === "Enter") {
      onClickLogin();
    }
  };

  const onClickLogin = async () => {
    try {
      const response = await api.login({ email, password });
      const data = await response.json();
      if (response.status === 401) {
        setMessage(data.message);
        setIsDisabled(true);
        return;
      } else {
        handleLoginSuccess(data);
      }
    } catch (error) {
      setMessage("there was a problem with the server. please try again later");
      setIsDisabled(true);
    }
  };

  const handleLoginSuccess = (data) => {
    const token = data.token;
    localStorage.setItem("token", JSON.stringify(token));
    setLoggedIn(true);
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Box className={classes.welcome}>
          <img className={classes.img} src={owl} alt="owl" />
          <Typography variant="h3" className={classes.title}>
            Trial of the Pyx
          </Typography>
        </Box>
        <Box className={classes.auth}>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onKeyPress={handleKeypressLogin}
              onChange={handleChangeEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onKeyPress={handleKeypressLogin}
              onChange={handleChangePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isDisabled}
              onClick={onClickLogin}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/password" style={{ textDecoration: "none" }}>
                  <Typography
                    align="left"
                    variant="body2"
                    style={{ marginTop: "5px" }}
                  >
                    Forgot password?
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <Typography variant="body2" style={{ marginTop: "5px" }}>
                    {"Don't have an account? Sign Up"}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
