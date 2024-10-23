import { Outlet } from "react-router-dom";
import HeaderLogin from "../../HeaderLogin";
import SideBar from "../../SideBar";
import "./LayoutLogin.css";

function LayoutLogin() {
  return (
    <>
        <HeaderLogin />
      <div className="layout-container">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <main className="content-container">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default LayoutLogin;
