import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Img from "../../assets/image/Character 1.svg";
import "./SideBar.css";

function SideBar() {
  const title_lg_line = "Sign In to\nRecharge Direct";
  const content_lg_line = "if you don’t an account\nyou can";
  const title_rg_line = "Sign Up to\nReceive Offers";
  const content_rg_line = "if you already have an account\nyou can";
  const [path, setPath] = useState();
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <div className="sidebar-box">
        <div className="client-container">
          <div className="circle circle1"></div>
          <div className="intro">
            <div className="title-log">
              <pre className="no-select">
                {path === "/register" ? title_rg_line : title_lg_line}
              </pre>
            </div>
            <div className="content-log">
              <pre className="no-select">
                {path === "/register" ? content_rg_line : content_lg_line}
                <NavLink className="register-nav" to={path === "/register" ? "/login" : "register"}>
                  {" "}
                  {path === "/login"? "Register here!" : "Login here!"}
                </NavLink>
              </pre>
            </div>
          </div>
          <div className="circle circle2"></div>
        </div>
        <img src={Img} alt="img" className="img-container" />
      </div>
    </>
  );
}

export default SideBar;
