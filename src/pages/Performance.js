import { Outlet } from "react-router-dom";
import PageTitle from "../components/__reusable/layout/PageTitle";

export default function Performance() {
  const title = "Performance";
  const menuItems = [
    {
      title: "National Accounts",
      path: "nationalaccounts",
    },
    {
      title: "Debt",
      path: "debt",
    },
    { title: "Monetary", path: "monetary" },
    { title: "Trade", path: "trade" },
  ];
  return (
    <>
      <PageTitle title={title} menuItems={menuItems} />
      <Outlet />
    </>
  );
}
