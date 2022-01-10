import { Box, Typography } from "@material-ui/core"
import encyclopedia from "./__data__/encyclopedia"
export default function Overview(){
  return (
    <>
    <Box>
      <Box>
      <Typography variant="h4" align="left" style={{padding: "25px"}}>Overview: Treasury</Typography>
      </Box>
    
    <Typography align="left" style={{padding: "25px"}}>{encyclopedia.overview}</Typography>
    </Box>
    
    </>
  )
}