import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  container: {
  }
}))
export default function MonetaryPolicy() {
  console.log("hello")
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <h1>Monetary Policy</h1>
    </Box>
  );
}
