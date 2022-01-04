
import { Outlet } from "react-router-dom";
import PageTitle from "../components/__reusable/layout/PageTitle";

export default function Performance() {
  const title = "Performance";
  const menuItems = [
    {
      title: "Debt",
      path: "debt",
    },
    {
      title: "GDP",
      path: "gdp",
    },
    { title: "Regulation", path: "imf" },
    { title: "IMF", path: "imf" },
  ];
  return (
    <>
      <PageTitle title={title} menuItems={menuItems}/>
      <Outlet/>
    </>
  );
}
