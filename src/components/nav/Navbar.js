import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  SwipeableDrawer,
  Box,
  Menu,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
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
  buttonMenu: {
    color: "white",
    // borderBottom: "1px solid white",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  buttonMenuTwo: {
    color: "white",
    // borderBottom: "1px solid white",
    // fontWeight: "bold",
    fontSize: "1rem",
  },
}));

export default function Navbar() {
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
          menuItems: [
            { title: "Desk", path: "desk" },
            { title: "Interest", path: "interest" },
            { title: "Inflation", path: "inflation" },
            { title: "Quantitative Easing", path: "quantitativeeasing" },
            { title: "Forward Guidance", path: "forwardguidance" },
          ],
        },
        {
          title: "Financial Policy",
          path: "financialpolicy",
        },
        { title: "Regulation", path: "regulation" },
        { title: "Reserves", path: "reserves" },
      ],
    },
    { name: "Bloc", path: "/bloc", menuItems: [
      { title: "Overview", path: "overview" },
      { title: "Trade", path: "trade" },
      { title: "Alliance", path: "alliance" },
    ] },
    { name: "Performace", path: "/performance" },
  ];
  const classes = useStyles();
  const [department, setDepartment] = useState("");
  const [departmentOperation, setDepartmentOperation] = useState("");

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

  const [anchorElDepartmentMenu, setAnchorElDepartmentMenu] = useState(null);
  const openDepartmentMenu = Boolean(anchorElDepartmentMenu);
  const handleClickDepartmentMenu = (event) => {
    setAnchorElDepartmentMenu(event.currentTarget);
  };
  const handleCloseDepartmentMenu = () => {
    setAnchorElDepartmentMenu(null);
  };

  const handleClickDepartmentMenuItem = (menuItem) => {
    handleCloseDepartmentMenu();
    setDepartmentOperation(menuItem);
    console.log(menuItem.menuItems);
  };

  function getDepartment(department) {
    setDepartment(department);
  }

  const [anchorElDepartmentOperationMenu, setAnchorElDepartmentOperationMenu] =
    useState(null);
  const openDepartmentOperationMenu = Boolean(anchorElDepartmentOperationMenu);
  const handleClickDepartmentOperationMenu = (event) => {
    setAnchorElDepartmentOperationMenu(event.currentTarget);
  };
  const handleCloseDepartmentOperationMenu = () => {
    setAnchorElDepartmentOperationMenu(null);
  };

  const handleClickDepartmentOperationMenuItem = () => {
    handleCloseDepartmentOperationMenu();
  };

  useEffect(() => {
    setDepartmentOperation(null)
  }, [department])

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
              
            </Typography>
            <Button
              color="primary"
              variant="outline"
              className={classes.buttonMenu}
              onClick={handleClickDepartmentMenu}
            >
              {department.name}
              <ArrowDropDownIcon />
            </Button>

            <Menu
              id="menudepartment"
              className={classes.menu}
              anchorEl={anchorElDepartmentMenu}
              open={openDepartmentMenu}
              onClose={handleCloseDepartmentMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {department.menuItems.map((menuItem) => {
                return (
                  <Link
                    key={menuItem.title}
                    style={{ textDecoration: "none", color: "black" }}
                    to={`${department.path}/${menuItem.path}`}
                  >
                    <MenuItem
                      key={menuItem.title}
                      onClick={() => handleClickDepartmentMenuItem(menuItem)}
                    >
                      {menuItem.title}
                    </MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </>
        )}

        {departmentOperation && (
          <>
            <Typography variant="h6" >
              {`/`}
            </Typography>
            <Button
              color="primary"
              variant="outline"
              className={classes.buttonMenuTwo}
              onClick={handleClickDepartmentOperationMenu}
            >
              {departmentOperation.title}
              <ArrowDropDownIcon/>
            </Button>
            <Menu
              id="menudepartment"
              className={classes.menu}
              anchorEl={anchorElDepartmentOperationMenu}
              open={openDepartmentOperationMenu}
              onClose={handleCloseDepartmentOperationMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {departmentOperation.menuItems.map((menuItem) => {
                return (
                  <Link
                    key={menuItem.title}
                    style={{ textDecoration: "none", color: "black" }}
                    to={`${department.path}/${departmentOperation.path}/${menuItem.path}`}
                  >
                    <MenuItem
                      key={menuItem.title}
                      onClick={() =>
                        handleClickDepartmentOperationMenuItem(menuItem)
                      }
                    >
                      {menuItem.title}
                    </MenuItem>
                  </Link>
                );
              })}
            </Menu>
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
