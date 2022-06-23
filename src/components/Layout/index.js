import { Outlet } from "react-router-dom";
import "./index.scss";
import TopNavBar from "../TopNavBar";

const Layout = () => {
  return (
    <>
      <TopNavBar />
      <Outlet />
    </>
  );
};

export default Layout;
