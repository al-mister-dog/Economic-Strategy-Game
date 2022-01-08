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
      title: "Balance of Payments",
      path: "balanceofpayments",
    },
    { title: "Monetary", path: "monetary" },
    { title: "GovernmentFinance", path: "governmentfinance" },
    { title: "Trade", path: "trade" },
  ];
  return (
    <>
      {/* <PageTitle title={title} menuItems={menuItems} /> */}
      <Outlet />
    </>
  );
}
