import { Outlet } from "react-router-dom";
import PageTitle from "../components/__reusable/PageTitle"

export default function Treasury() {
  const title = "Treasury";
  const menuItems = [
    {
      name: "Budget",
      path: "budget",
    },
    {
      name: "Bond Market",
      path: "bondmarket",
    },
    { name: "Regulation", path: "regulation" },
    { name: "Reserves", path: "reserves" },
  ];

  return (
    <>
      <PageTitle title={title} menuItems={menuItems}/>
      <Outlet />
    </>
  );
}
