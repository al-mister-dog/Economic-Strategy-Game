import {useState} from "react"
import { Outlet } from "react-router-dom";
import CompoundInterestCalculator from "../components/central-bank/CompoundInterestCalculator";
import MainMenu from "../components/central-bank/CentralBankMenu"

import {
  Box,
  IconButton,
  makeStyles,
  Typography,
  SwipeableDrawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles(() => ({
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
    height: "5rem",
  },
  titleMenu: {
    color: "black",
    fontSize: "2rem",
    width: "2rem",
    height: "2rem",
  },
}));
export default function CentralBank() {
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
    <>
      <Box className={classes.title}>
        <Typography variant="h3">Central Bank</Typography>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon className={classes.titleMenu} />
        </IconButton>
        <SwipeableDrawer
        anchor={"left"}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {mainMenu("right")}
      </SwipeableDrawer>
      </Box>
      <Outlet/>
      <CompoundInterestCalculator />
    </>
  );
}
