import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  container: {
  },
}));
export default function FinancialPolicy() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <h1>Financial Policy</h1>
    </Box>
  );
}
