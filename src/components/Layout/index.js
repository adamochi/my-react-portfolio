import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.scss";
import TopNavBar from "../TopNavBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <TopNavBar />
      <Outlet />
    </>
  );
};

export default Layout;
