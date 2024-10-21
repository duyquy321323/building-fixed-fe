// eslint-disable-next-line
import Email from "../../assets/image/Email.svg";
import "./Header.css";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoBehance } from "react-icons/bi";
import { HiOutlinePhone } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Header() {

    return (
        <>
            <header className="header">
                <div className="header-top">
                    <div className="header-container">
                        <nav className="header-detail">
                            <div className="header-email">
                                <img src={Email} alt="Email" />
                                <div className="header-email-detail"><span>Email us at: </span> example@mail.com</div>
                            </div>
                            <div className="header-social">
                                <ul className="header-list">
                                    <li className="header-item"><FaFacebookF className="icon" /></li>
                                    <li className="header-item"><SlSocialDribbble className="icon" /></li>
                                    <li className="header-item"><FaLinkedinIn className="icon" /></li>
                                    <li className="header-item"><FaInstagram className="icon" /></li>
                                    <li className="header-item"><BiLogoBehance className="icon" /></li>
                                </ul>
                                <div className="header-contact">
                                    <span>|</span>
                                    <HiOutlinePhone className="icon" /> 123-4567 890
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="header-bottom">
                    <div className="header-container">
                        <div className="header-nav-list">
                            <NavLink to="/">HOME</NavLink>
                            <NavLink to="/introduce">GIỚI THIỆU</NavLink>
                            <NavLink to="/project">DỰ ÁN BẤT ĐỘNG SẢN</NavLink>
                            <NavLink to="/news">TIN TỨC</NavLink>
                            <NavLink to="/contact">LIÊN HỆ</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;