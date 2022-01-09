import { connect } from "react-redux";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
}));

function Overview() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" align="left" className={classes.title}>
        Overview: Bloc
      </Typography>
    </>
  );
}
const mapStateToProps = () => {

};

export default connect(mapStateToProps)(Overview);
