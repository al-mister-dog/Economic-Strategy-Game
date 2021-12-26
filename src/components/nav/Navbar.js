import { useState } from "react";
import MainMenu from "./MainMenu";
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
const lightPrimary = "#ECDBBA";
const lightSecondary = "#C84B31";
const darkPrimary = "#191919";
const darkSecondary = "#2D4263";
const useStyles = makeStyles(() => ({
  nav: {
    background: darkPrimary,
    color: "white",
    boxShadow: "none",
  },
  mainMenu: {
    background: darkSecondary,
    color: "white",
  },
  title: {
    fontFamily: "Open Sans"
  }
}));

export default function Navbar() {
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
      <MainMenu />
    </Box>
  );
  return (
    <AppBar className={classes.nav} position="sticky">
      <Toolbar>
        <IconButton
          // size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>Trial of the Pyx</Typography>
      </Toolbar>
      <SwipeableDrawer
        anchor={"left"}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {mainMenu("left")}
      </SwipeableDrawer>
    </AppBar>
  );
}
