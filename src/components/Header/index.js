// eslint-disable-next-line
import { useEffect, useState } from "react";
import { BiLogoBehance } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";
import { SlSocialDribbble } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LoginIcon from "../../assets/image/Icon.svg";
import BackIcon from "../../assets/image/icon.svg";
import ManagerPageIcon from "../../assets/image/login.svg";
import { logout } from "../actions";
import api from "../api";
import "./Header.css";

function Header() {
  const location = useLocation();
  const defaultPath = ["/", "/introduce", "/news", "/project", "/contact"];
  const [userData, setUserData] = useState(localStorage.getItem("reduxState"));
  const dispatch = useDispatch();
  const [isAdminPage, setIsAdminPage] = useState(
    !defaultPath.includes(location.pathname)
  );
  useEffect(() => {
    setIsAdminPage(!defaultPath.includes(location.pathname));
  }, [location.pathname]);

  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await api.post("account/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("expiryTime");
      localStorage.removeItem("reduxState");
      setUserData(localStorage.getItem("reduxState"));
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="header-container">
            <nav className="header-detail">
              {defaultPath.includes(location.pathname) ? (
                <NavLink
                  to={userData ? "" : "/login"}
                  className="login-btn"
                  onClick={
                    userData
                      ? handleLogout
                      : () => {
                          console.log(userData);
                        }
                  }
                >
                  <div className="header-email">
                    <img src={LoginIcon} alt="Login" />
                  </div>
                </NavLink>
              ) : (
                <NavLink to="/" className="login-btn">
                  <div className="header-email">
                    <img src={BackIcon} alt="BackIcon" />
                  </div>
                </NavLink>
              )}
              <div className="header-social">
                <ul className="header-list">
                  <li className="header-item">
                    <FaFacebookF className="icon" />
                  </li>
                  <li className="header-item">
                    <SlSocialDribbble className="icon" />
                  </li>
                  <li className="header-item">
                    <FaLinkedinIn className="icon" />
                  </li>
                  <li className="header-item">
                    <FaInstagram className="icon" />
                  </li>
                  <li className="header-item">
                    <BiLogoBehance className="icon" />
                  </li>
                </ul>
                <div className="header-contact">
                  <span>|</span>
                  <HiOutlinePhone className="icon" /> 123-4567 890
                </div>
                {defaultPath.includes(location.pathname) ? (
                  <NavLink to="/building-management" className="header-contact">
                    <img src={ManagerPageIcon} alt="ManagerPageIcon" />
                  </NavLink>
                ) : (
                  <></>
                )}
              </div>
            </nav>
          </div>
        </div>

        <div className="header-bottom">
          <div className="header-container">
            <div
              className={"header-nav-list" + (isAdminPage ? " active_ad" : "")}
            >
              {isAdminPage ? (
                <>
                  <NavLink to="/building-management">QUẢN LÝ TÒA NHÀ</NavLink>
                  <NavLink to="/introduce">QUẢN LÝ KHÁCH HÀNG</NavLink>
                  <NavLink to="/project">QUẢN LÝ TÀI KHOẢN</NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/">HOME</NavLink>
                  <NavLink to="/introduce">GIỚI THIỆU</NavLink>
                  <NavLink to="/project">DỰ ÁN BẤT ĐỘNG SẢN</NavLink>
                  <NavLink to="/news">TIN TỨC</NavLink>
                  <NavLink to="/contact">LIÊN HỆ</NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
