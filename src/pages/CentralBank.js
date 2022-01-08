import { Outlet } from "react-router-dom";

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
      <Outlet />
    </>
  );
}
