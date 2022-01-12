import { Link } from "react-router-dom";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
const darkPrimary = "#191919";
const useStyles = makeStyles(() => ({
  menuItem: {
    // color: "white",
    // fontWeight: "bold"
  },

}))
export default function MainMenu({departments, getDepartment}) {
  const classes = useStyles()
  return (
    <>
      <List className={classes.menuItem}>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.menuItem}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={/*<p style={{fontWeight: bold  margin: "0px"}}>{text}</p>}*/text}/>
          </ListItem>
        ))}
      </List>
      <Divider className={classes.menuItem}/>
      <List>
        {departments.map((department, index) => (
          <Link key={index} style={{ textDecoration: 'none', color: "black" }} to={department.path}>
            <ListItem button key={index} onClick={() => getDepartment(department)}>
              <ListItemText primary={/*<p style={{fontWeight: bold  margin: "0px"}}>{text}</p>}*/department.name}/>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}
