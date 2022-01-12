import { connect } from "react-redux";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  textTitle: {
    padding: "25px",
    fontWeight: "bold"
  },
  textIntro: {
    padding: "25px 0 25px 0",
    "@media (max-width: 620px)": {
      fontSize: "0.8rem",
    },
  },
}));

function Overview() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" align="left" className={classes.title}>
        Overview: Bloc
      </Typography>
      <hr></hr>
      <Typography align="justify" className={classes.textIntro}>
        Blocs are agreements between governments to reduce barriers to trade
        among participating states. Blocs vary in their level of integration,
        from preferential access and reduced tarrifs, to economic and monetary
        unions.
      </Typography>
    </>
  );
}
const mapStateToProps = () => {};

export default connect(mapStateToProps)(Overview);
