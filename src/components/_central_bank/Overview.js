import { Typography, makeStyles } from "@material-ui/core"
import encyclopedia from "./encyclopedia"

const useStyles = makeStyles(() => ({
  titleText: {
    padding: "25px",
  },
  introductoryText: {
    padding: "25px 0 25px 0",
    "@media (max-width: 620px)": {
      fontSize: "0.8rem",
    },
  },
}));

export default function Overview(){
  const classes = useStyles()
  return (
    <>
    <Typography variant="h4" align="left" className={classes.title}>Overview: Central Bank</Typography>
    <hr></hr>
    <Typography align="justify" className={classes.introductoryText}>{encyclopedia.overview}</Typography>
    </>
  )
}