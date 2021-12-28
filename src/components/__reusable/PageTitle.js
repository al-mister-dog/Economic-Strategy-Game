import { useState } from "react";
import { Link } from "react-router-dom";

import { Box, makeStyles, Typography, Tabs, Tab } from "@material-ui/core";

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
}));

export default function PageTitle({ title, menuItems }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box className={classes.title}>
      <Typography className={classes.label} variant="h4">
        {title}
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="page title tabs"
        indicatorColor="#ECDBBA"
      >
        {menuItems.map((menuItem, index) => {
          const { title, path } = menuItem;
          return (
            <Link
              key={index}
              style={{ textDecoration: "none", color: "black" }}
              to={`${path}`}
            >
              <Tab label={title} />
            </Link>
          );
        })}
      </Tabs>
    </Box>
  );
}