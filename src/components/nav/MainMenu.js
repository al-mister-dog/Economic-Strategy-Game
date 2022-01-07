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
  mainMenu: {
    background: darkPrimary,
    color: "white",
  },

}))
export default function MainMenu({departments, getDepartment}) {
  return (
    <>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {departments.map((department, index) => (
          <Link key={index} style={{ textDecoration: 'none', color: "black" }} to={department.path}>
            <ListItem button key={index} onClick={() => getDepartment(department)}>
              <ListItemText primary={department.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}
