import { useState } from "react";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer,
  Box,
  Menu,
  MenuItem,
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
    fontFamily: "Open Sans",
  },
  menuTitle: {
    marginLeft: "1.5rem",
    fontWeight: "bold",
  },
  menuTitleSecondary: {
    marginLeft: "1.5rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [department, setDepartment] = useState("");
  const [departmentOperation, setDepartmentOperation] = useState("");

  function getDepartment(department) {
    setDepartment(department);
  }
  const departments = [
    { name: "Treasury", path: "/treasury" },
    {
      name: "Central Bank",
      path: "/centralbank",
      title: "Central Bank",
      menuItems: [
        {
          title: "Monetary Policy",
          path: "monetarypolicy",
        },
        {
          title: "Financial Policy",
          path: "financialpolicy",
        },
        { title: "Regulation", path: "regulation" },
        { title: "Reserves", path: "reserves" },
      ],
    },
    { name: "Bloc", path: "/bloc" },
    { name: "Performace", path: "/performance" },
  ];
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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenuItem = (menuItem )=> {
handleClose()
setDepartmentOperation(menuItem.title)
  }
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
        <Typography variant="h6" className={classes.title}>
          Trial of the Pyx
        </Typography>
        {department && (
          <>
            <Typography variant="h6" className={classes.menuTitle}>
              |
            </Typography>
            <Typography
              variant="h6"
              className={classes.menuTitle}
              onClick={handleClick}
            >
              {department.name}
            </Typography>
            <Menu
              id="menu"
              className={classes.menu}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {department.menuItems.map((menuItem) => {
                return (
                  <Link key={menuItem.title} style={{ textDecoration: 'none', color: "black" }} to={`${department.path}/${menuItem.path}`}>
                <MenuItem key={menuItem.title} onClick={() => handleClickMenuItem(menuItem)}>{menuItem.title}</MenuItem>
                </Link>)
              })}
              
            
            </Menu>
          </>
        )}
        {departmentOperation && (
          <>
            <Typography
              variant="h6"
              className={classes.menuTitleSecondary}
            >{`/`}</Typography>
            <Typography variant="h6" className={classes.menuTitleSecondary}>
              Monetary Policy
            </Typography>
          </>
        )}
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
