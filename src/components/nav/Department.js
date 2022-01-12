import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SET_DEPARTMENT_OPERATION } from "../../state/actions";
import { Link } from "react-router-dom";

import {
  Button,
  Typography,
  Menu,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const darkPrimary = "#191919";

const useStyles = makeStyles(() => ({
  title: {
    marginLeft: "1.5rem",
    fontWeight: "bold",
    "@media (max-width: 620px)": {
      fontSize: "0.9rem",
    },
  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
    "@media (max-width: 620px)": {
      fontSize: "0.7rem",
    },
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: darkPrimary,
      boxShadow: "none"
    }
  }
}));

function Navbar({ department, setDepartmentOperation }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const openDepartmentMenu = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickMenuItem = (menuItem) => {
    handleCloseMenu();
    setDepartmentOperation(menuItem);
  };

  useEffect(() => {}, [department]);

  return (
    <>
      <Typography variant="h6" className={classes.title}></Typography>
      <Button
        color="primary"
        variant="outline"
        className={classes.button}
        onClick={handleClickMenu}
      >
        {department.name}
        <ArrowDropDownIcon />
      </Button>

      <Menu
        id="menudepartment"
        className={classes.menu}
        anchorEl={anchorEl}
        open={openDepartmentMenu}
        onClose={handleCloseMenu}
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
                style={{color: "white"}}
                onClick={() => handleClickMenuItem(menuItem)}
              >
                {menuItem.title}
              </MenuItem>
            </Link>
          );
        })}
      </Menu>
    </>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    handleCloseMenu: ownProps.handleCloseMenu,
    departments: state.departments,
    department: state.department,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDepartmentOperation: (departmentOperation) =>
      dispatch({
        type: SET_DEPARTMENT_OPERATION,
        payload: { departmentOperation },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
