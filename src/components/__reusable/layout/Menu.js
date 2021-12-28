import { Link } from "react-router-dom";

import { List, ListItem, ListItemText } from "@material-ui/core";

export default function Menu({menuItems}) {
  return (
    <>
      <List>
        {menuItems.map((menuItem, index) => {
          const { path, name } = menuItem;
          return (
            <Link
              key={index}
              style={{ textDecoration: "none", color: "black" }}
              to={`${path}`}
            >
              <ListItem button key={index}>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );
}
