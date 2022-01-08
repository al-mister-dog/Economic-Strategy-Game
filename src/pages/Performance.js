import { Outlet } from "react-router-dom";

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
      <Outlet />
    </>
  );
}
