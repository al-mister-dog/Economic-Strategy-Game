import { useState } from "react";
import { Box, Tabs, Tab, Typography, makeStyles } from "@material-ui/core";
import CompoundInterestCalculator from "../../__reusable/tools/CompoundInterestCalculator";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    overflow: "hidden",
  },
}));
export default function Regulation() {
  const classes = useStyles();
  return (
    <>
      <h1>Under Contruction</h1>
    </>
  );
}
