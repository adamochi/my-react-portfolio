import { Outlet } from "react-router-dom";
import "./index.scss";
import TopNavBar from "../../components/TopNavBar";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <TopNavBar />
      <Suspense fallback={"Loading. . ."}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
