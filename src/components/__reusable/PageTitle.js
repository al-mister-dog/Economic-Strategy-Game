import { useState } from "react";
import Menu from "./Menu";

import {
  Box,
  IconButton,
  makeStyles,
  Typography,
  SwipeableDrawer,
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
  label: {
    overflow: "hidden",
  },
  titleMenu: {
    color: "black",
    fontSize: "2rem",
    width: "2rem",
    height: "2rem",
  },
}));

export default function PageTitle({title, menuItems}) {
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
  const mainMenu = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
      sx={{ width: 200 }}
    >
      <Menu menuItems={menuItems}/>
    </Box>
  );
  return (
    <Box className={classes.title}>
      <Typography className={classes.label} variant="h4">
        {title}
      </Typography>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon className={classes.titleMenu} />
      </IconButton>
      <SwipeableDrawer
        anchor={"right"}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {mainMenu("right")}
      </SwipeableDrawer>
    </Box>
  );
}
