import { Typography } from "@material-ui/core"
import encyclopedia from "./encyclopedia"
export default function Overview(){
  return (
    <>
    <Typography variant="h4" align="left" style={{padding: "25px"}}>Overview: Central Bank</Typography>
    <Typography align="left" style={{padding: "25px"}}>{encyclopedia.overview}</Typography>
    </>
  )
}