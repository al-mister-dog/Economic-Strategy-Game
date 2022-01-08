import { Typography } from "@material-ui/core"
import encyclopedia from "./encyclopedia"
export default function Overview(){
  return (
    <>
    <Typography>Overview: Central Bank</Typography>
    <Typography>{encyclopedia.overview}</Typography>
    </>
  )
}