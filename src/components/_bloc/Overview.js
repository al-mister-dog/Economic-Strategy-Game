import { connect } from "react-redux";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
}));

function Overview() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" align="left" className={classes.title} style={{padding: "25px"}}>
        Overview: Bloc
      </Typography>
      <hr></hr>
      <Typography align="left" style={{padding: "25px"}}>
        Blocs are agreements between governments to reduce barriers to trade among participating states. Blocs vary in their level of integration, from preferential access and reduced tarrifs, to economic and monetary unions.
      </Typography>
    </>
  );
}
const mapStateToProps = () => {

};

export default connect(mapStateToProps)(Overview);
