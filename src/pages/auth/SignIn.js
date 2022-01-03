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

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#fdfbf7",
    maxWidth: "70vw",
    margin: "auto",
    marginTop: "2rem",
    padding: "25px",
    "@media (max-width: 620px)": {
      width: "100vw",
      padding: "5px",
    },
  },
}))

export default function SignIn() {
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
    <Typography variant="h2">Trial of the Pyx</Typography>
    <Paper className={classes.paper}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
