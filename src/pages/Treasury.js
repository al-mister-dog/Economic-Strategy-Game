import { Outlet } from "react-router-dom";
import PageTitle from "../components/__reusable/PageTitle"

export default function Treasury() {
  const title = "Treasury";
  const menuItems = [
    {
      title: "Budget",
      path: "budget",
    },
    {
      title: "Bond Market",
      path: "bondmarket",
    },
    { title: "Regulation", path: "regulation" },
    { title: "Reserves", path: "reserves" },
  ];

  return (
    <>
      <PageTitle title={title} menuItems={menuItems}/>
      <Outlet />
    </>
  );
}
