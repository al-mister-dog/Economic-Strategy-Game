import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SET_DEPARTMENT, SET_DEPARTMENT_OPERATION } from "../../state/actions";
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
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const lightPrimary = "#ECDBBA";
const lightSecondary = "#C84B31";
const darkPrimary = "#191919";
const darkSecondary = "#2D4263";
const useStyles = makeStyles(() => ({
  nav: {
    backgroundColor: darkPrimary,
    color: "white",
    boxShadow: "none",
  },
  toolbarOne: {
    margin: "0 1.5rem 0 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid white",
    "@media (max-width: 620px)": {
      margin: "0px 0px 0px 0px",
    },
  },
  toolbarTwo: {
    backgroundColor: darkPrimary,
  },
  mainMenu: {
    background: darkSecondary,
    color: "white",
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
  },
  menuTitle: {
    marginLeft: "1.5rem",
    fontWeight: "bold",
    "@media (max-width: 620px)": {
      fontSize: "0.9rem",
    },
  },
  menuTitleSecondary: {
    marginLeft: "1.5rem",
    "@media (max-width: 620px)": {
      fontSize: "0.9rem",
    },
  },
  buttonMenu: {
    color: "white",
    // borderBottom: "1px solid white",
    fontWeight: "bold",
    fontSize: "1rem",
    "@media (max-width: 620px)": {
      fontSize: "0.7rem",
    },
  },
  buttonMenuTwo: {
    color: "white",
    // borderBottom: "1px solid white",
    // fontWeight: "bold",
    fontSize: "1rem",
    "@media (max-width: 620px)": {
      fontSize: "0.7rem",
    },
  },
}));

function Navbar({
  departments,
  department,
  departmentOperation,
  setDepartment,
  setDepartmentOperation,
}) {

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
  }, [department]);

  return (
    <AppBar className={classes.nav} position="sticky">
      <Toolbar className={classes.toolbarOne}>
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
        <Typography variant="h6" className={classes.trial}>
          My Trial
        </Typography>
      </Toolbar>

      <Toolbar className={classes.toolbarTwo}>
        {department && (
          <>
            <Typography variant="h6" className={classes.menuTitle}></Typography>
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
            <Typography variant="h6">{`/`}</Typography>
            <Button
              color="primary"
              variant="outline"
              className={classes.buttonMenuTwo}
              onClick={handleClickDepartmentOperationMenu}
            >
              {departmentOperation.title}
              {departmentOperation.menuItems.length > 0 && (
                <ArrowDropDownIcon />
              )}
            </Button>
            {departmentOperation.menuItems.length > 0 && (
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
            )}
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
const mapStateToProps = (state) => {
  return {
    departments: state.departments,
    department: state.department,
    departmentOperation: state.departmentOperation,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setDepartment: (department) =>
      dispatch({
        type: SET_DEPARTMENT,
        payload: { department },
      }),
    setDepartmentOperation: (departmentOperation) =>
      dispatch({
        type: SET_DEPARTMENT_OPERATION,
        payload: { departmentOperation },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
