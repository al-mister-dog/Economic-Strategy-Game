import {Link} from "react-router-dom"
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
  makeStyles
} from "@material-ui/core";

import LockIcon from '@material-ui/icons/Lock';
import owl from "./owl.jpeg"

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
      width: "100vw",
      padding: "5px",
      flexDirection: "column",
      maxHeight: "200vh"
    },
  },
  welcome: {
    "@media (max-width: 620px)": {
      display: "none"
    },
    
  },
  auth: {
    width: "50%",
    "@media (max-width: 620px)": {
      width: "90%",
      margin: "auto"
    },
  }
}))

export default function Login() {
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
      <Box sx={{width: "50%"}} className={classes.welcome}>
        <img src={owl} alt="owl"/>
      <Typography variant="h3">Trial of the Pyx</Typography>
      </Box>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className={classes.auth}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/password" >
                <Typography variant="body2">Forgot password?</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" >
                <Typography variant="body2">{"Don't have an account? Sign Up"}</Typography>
                
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
    </>
    
  );
}
