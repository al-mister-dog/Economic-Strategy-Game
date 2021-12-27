import { Link } from "react-router-dom";

import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));
export default function CentralBankMenu() {
  // let { url } = useMatch();
  // console.log({path, url})
  const departments = [
    {
      name: "Monetary Policy",
      path: "monetarypolicy",
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

      {/* {departments.map((department, index) => {
          const { path, element } = department;
          return <Route key={index} path={`${path}`} element={element} />;
        })} */}
    </>
  );
}
