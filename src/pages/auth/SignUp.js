import { Link } from "react-router-dom";
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

import LockIcon from "@material-ui/icons/Lock";
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
      maxHeight: "200vh"
    },
  },
  welcome: {
    width: "50%",
    "@media (max-width: 620px)": {
      padding: "10px",
      // display: "flex",
      // alignItems: "center",
      width: "90%",
      margin: "auto"
    },
    
  },
  img: {
    "@media (max-width: 620px)": {
      width: "10rem"
    },
  },
  title: {
    "@media (max-width: 620px)": {
      // fontSize: "1.5rem"
      display: "none"
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
      margin: "auto"
    },
  }
}))

export default function SignUp() {
  const classes = useStyles()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
    
    <Paper className={classes.paper}>
      <Box className={classes.welcome}>
        <img className={classes.img} src={owl} alt="owl"/>
      <Typography variant="h3" className={classes.title}>Trial of the Pyx</Typography>
      </Box>
      <Box

        className={classes.auth}
      >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{marginTop: "40px"}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item style={{marginTop: "20px"}}>
                <Link to="/login">
                  <Typography variant="body2">
                    Already have an account? Log in
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
