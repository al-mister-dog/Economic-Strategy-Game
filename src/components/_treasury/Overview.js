import { Typography } from "@material-ui/core"
import encyclopedia from "./__data__/encyclopedia"
export default function Overview(){
  return (
    <>
    <Typography>Overview: Treasury</Typography>
    <Typography>{encyclopedia.overview}</Typography>
    </>
  )
}