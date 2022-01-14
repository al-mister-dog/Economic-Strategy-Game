import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SET_DEPARTMENT } from "../../state/actions";
import MainMenu from "./MainMenu";
import SubNav from "./SubNav";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer,
  Box,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const darkPrimary = "#191919";

const useStyles = makeStyles(() => ({
  nav: {
    backgroundColor: darkPrimary,
    color: "white",
    boxShadow: "none",
  },
  toolbar: {
    margin: "0 1.5rem 0 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid white",
    "@media (max-width: 620px)": {
      margin: "0px 0px 0px 0px",
    },
  },
  mainMenu: {
    
    // "& .MuiPaper-root": {
    //   backgroundColor: darkSecondary
    // }
  },

  title: {
    fontFamily: "Open Sans",
    fontWeight: "bold",
    "@media (max-width: 620px)": {
      fontSize: "1rem",
    },
  },
  trial: {
    fontFamily: "Open Sans",
    "@media (max-width: 620px)": {
      fontSize: "0.9rem",
    },
    "&:hover": {
      cursor: "pointer"
    }
  },
}));

function Navbar({ departments, department, setDepartment }) {
  const loggedin = false
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (bool) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(bool);
  };
  const mainMenu = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
      sx={{ width: 200 }}
    >
      <MainMenu departments={departments} getDepartment={getDepartment} />
    </Box>
  );

  function getDepartment(department) {
    setDepartment(department);
  }

  return (
    <AppBar className={classes.nav} position="sticky">
      <Toolbar className={classes.toolbar}>
        <IconButton
          // size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          Trial of the Pyx
        </Typography>
        <Link to={loggedin ? `user` : `login`} style={{textDecoration: "none", color: "white"}}>
        <Typography variant="h6" className={classes.trial}>
          My Trial
        </Typography>
        </Link>
        
      </Toolbar>
      <SubNav />
      <SwipeableDrawer
        anchor={"left"}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        className={classes.mainMenu}
      >
        {mainMenu("left")}
      </SwipeableDrawer>
    </AppBar>
  );
}
const mapStateToProps = (state) => {
  return {
    departments: state.departments,
    department: state.department,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDepartment: (department) =>
      dispatch({
        type: SET_DEPARTMENT,
        payload: { department },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
