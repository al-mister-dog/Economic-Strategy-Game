import { useState } from "react";
import { Link } from "react-router-dom";

import { Box, makeStyles, Typography, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: "9vh",
    backgroundColor: theme.palette.common.darkSecondary,
    color: "white",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "auto",
  },
  title: {
    marginLeft: "25px",
    marginRight: "25px",
    overflow: "hidden",
    "@media (max-width: 620px)": {
      fontSize: "0.8rem",
    },
  },
  tab: {
    color: "white",
    "@media (max-width: 620px)": {
      fontSize: "0.4rem",
    },
  },
}));

export default function PageTitle({ title, menuItems }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box className={classes.toolbar}>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="page title tabs"
      >
        {menuItems.map((menuItem, index) => {
          const { title, path } = menuItem;
          return (
            <Link
              key={index}
              style={{ textDecoration: "none", color: "black" }}
              to={`${path}`}
            >
              <Tab className={classes.tab} label={title} />
            </Link>
          );
        })}
      </Tabs>
    </Box>
  );
}
