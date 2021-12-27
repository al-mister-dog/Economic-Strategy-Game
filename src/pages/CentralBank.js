
import { Outlet } from "react-router-dom";
import CompoundInterestCalculator from "../components/central-bank/CompoundInterestCalculator";
import PageTitle from "../components/__reusable/PageTitle";

export default function CentralBank() {
  const title = "Central Bank";
  const menuItems = [
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
      <PageTitle title={title} menuItems={menuItems}/>
      <Outlet/>
      {/* <CompoundInterestCalculator /> */}
    </>
  );
}
