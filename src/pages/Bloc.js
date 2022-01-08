import { Outlet } from "react-router-dom";

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
    <div style={{backgroundColor: "#C84B31", minHeight: "150vh"}}>
      <Outlet />
    </div>
  );
}
