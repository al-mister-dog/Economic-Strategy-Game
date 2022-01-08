import { Outlet } from "react-router-dom";


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
      <Outlet />
    </>
  );
}
