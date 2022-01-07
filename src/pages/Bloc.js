import { Outlet } from "react-router-dom";
import PageTitle from "../components/__reusable/layout/PageTitle";

export default function Bloc() {
  const title = "Bloc";
  const menuItems = [
    {
      title: "Overview",
      path: "overview",
    },
    {
      title: "Trade",
      path: "trade",
    },
    {
      title: "Alliance",
      path: "alliance",
    },
  ];
  return (
    <>
      <Outlet />
    </>
  );
}
