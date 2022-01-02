import { useState } from "react";
import { Link } from "react-router-dom";

import { Box, makeStyles, Typography, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.common.darkSecondary,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: "1px",
  },
  title: {
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
        // indicatorColor="#ECDBBA"
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
