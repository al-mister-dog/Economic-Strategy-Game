import { Box, Typography, makeStyles } from "@material-ui/core";
import encyclopedia from "./encyclopedia";

const useStyles = makeStyles(() => ({
  textTitle: {
    padding: "25px",
    fontWeight: "bold",
    "@media (max-width: 620px)": {
      fontSize: "1.5rem",
    },
  },
  textIntro: {
    padding: "25px 0 25px 0",
    "@media (max-width: 620px)": {
      fontSize: "0.8rem",
    },
  },
  containerArticle: {
    padding: "0 6rem 0 6rem",
    "@media (max-width: 620px)": {
      padding: "0 1rem 0 1rem",
    },
  },
}));

export default function Overview() {
  const classes = useStyles();
  return (
    <Box className={classes.containerArticle}>
      <Typography variant="h4" className={classes.textTitle}>
        Overview: Central Bank
      </Typography>
      <hr></hr>
      <Typography align="justify" className={classes.textIntro}>
        {encyclopedia.overview}
      </Typography>
    </Box>
  );
}

// import { Box, Typography, makeStyles } from "@material-ui/core"
// import encyclopedia from "./encyclopedia"

// const useStyles = makeStyles((theme) => ({
//   box: {
//     backgroundColor: theme.palette.common.darkSecondary,
//     borderRadius: "5px",
//     padding: "10px",
//   },
//   textTitle: {
//     padding: "25px",
//   },
//   textIntro: {
//     padding: "25px 0 25px 0",
//     "@media (max-width: 620px)": {
//       fontSize: "0.8rem",
//     },
//   },
// }));

// export default function Overview(){
//   const classes = useStyles()
//   return (
//     <>
//     <Box className={classes.box}>
//     <Typography variant="h4" align="left" className={classes.title} style={{color: "#fdfbf7"}}>Overview: Central Bank</Typography>
//     </Box>

//     <hr></hr>
//     <Typography align="justify" className={classes.textIntro}>{encyclopedia.overview}</Typography>
//     </>
//   )
// }
