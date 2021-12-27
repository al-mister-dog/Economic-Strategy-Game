import { Link } from "react-router-dom";

import { List, ListItem, ListItemText } from "@material-ui/core";

export default function CentralBankMenu() {
  const departments = [
    {
      name: "Budget",
      path: "budget",
    },
    {
      name: "Financial Policy",
      path: "financialpolicy",
    },
    { name: "Regulation", path: "regulation" },
    { name: "Reserves", path: "reserves" },
  ];
  return (
    <>
      <List>
        {departments.map((department, index) => {
          const { path, name } = department;
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
