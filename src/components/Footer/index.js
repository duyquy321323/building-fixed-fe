import Logo1 from "../../assets/image/Logo.png";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoBehance } from "react-icons/bi";
import "./Footer.css";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-col">
                            <div className="footer-logo">
                                <img src={Logo1} alt="Logo" width={120} height={44}/>
                            </div>
                            <h3 className="footer-title">Contact Us</h3>
                            <p>Call: +123 400 123</p>
                            <p>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
                            <p className="footer-email">Email: example@mail.com</p>
                            <ul className="footer-social">
                                <li className="header-item"><FaFacebookF className="icon" /></li>
                                <li className="header-item"><SlSocialDribbble className="icon" /></li>
                                <li className="header-item"><FaLinkedinIn className="icon" /></li>
                                <li className="header-item"><FaInstagram className="icon" /></li>
                                <li className="header-item"><BiLogoBehance className="icon" /></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3 className="footer-title">Features</h3>
                            <ul className="footer-list">
                                <li>Home</li>
                                <li>Become a Host</li>
                                <li>Pricing</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3 className="footer-title">Company</h3>
                            <ul className="footer-list">
                                <li>About Us</li>
                                <li>Press</li>
                                <li>Contact</li>
                                <li>Careers</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3 className="footer-title">Team and policies</h3>
                            <ul className="footer-list">
                                <li>Terms of servies</li>
                                <li>Privacy Policy</li>
                                <li>Security</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;