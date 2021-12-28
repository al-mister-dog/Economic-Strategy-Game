import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "#fdfbf7",
    width: "70vw",
    height: "80vh",
    padding: "25px",
    margin: "auto",
    marginTop: "2rem",
    display: "flex",
    alignItems: "flex-start",
  },
}));
export default function Container(children) {
  const classes = useStyles();
  return <Paper className={classes.paper}>{children}</Paper>;
}
