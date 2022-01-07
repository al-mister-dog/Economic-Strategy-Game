import { Paper, Typography } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import PageTitle from "../components/__reusable/layout/PageTitle";

export default function CentralBank() {
  const title = "Central Bank";
  const menuItems = [
    {
      title: "Monetary Policy",
      path: "monetarypolicy",
    },
    {
      title: "Financial Policy",
      path: "financialpolicy",
    },
    { title: "Regulation", path: "regulation" },
    { title: "Reserves", path: "reserves" },
  ];
  return (
    <>
      {/* <PageTitle title={title} menuItems={menuItems} /> */}
      <Outlet />
    </>
  );
}
