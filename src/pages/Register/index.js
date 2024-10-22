import { useState } from "react";
import { NavLink } from "react-router-dom";
import AppleIcon from "../../assets/image/Shape.svg";
import GoogleIcon from "../../assets/image/Wrapper.svg";
import BlockEye from "../../assets/image/blockeye.svg";
import FacebookIcon from "../../assets/image/facebook.svg";
import ShowEye from "../../assets/image/showeye.svg";
import "./Register.css"

function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    fullname: "",
    phoneNumber: "",
    email: "",
  });
  const [event, setEvent] = useState({
    username: false,
    password: false,
    fullname: false,
    phoneNumber: false,
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState, // sao chép đối tượng trước đó
      [name]: value, // thay đổi hoặc thêm mới thuộc tính
    }));
  }
  function handleBlur(e) {
    const { name, value } = e.target;
    if (String(value).trim() === "") {
      setEvent((prevState) => ({
        ...prevState,
        [name]: true,
      }));
    } else {
      setEvent((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    }
  }
  return (
    <>
      <div className="register-container">
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                className={"inp" + (event.username ? " active-inp" : "")}
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter username"
                required
              />
              {event.username && (
                <div
                  class="fa-regular fa-exclamation"
                  title="Username is required"
                ></div>
              )}
            </div>
            <div className="input-container">
              <img
                src={showPass ? ShowEye : BlockEye}
                alt="icon"
                className="eye"
                onClick={() => setShowPass(!showPass)}
              />
              <input
                className={"inp" + (event.password ? " active-inp" : "")}
                id="password"
                name="password"
                type={showPass ? "text" : "password"}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter password"
              />
              {event.password && (
                <div
                  class="fa-regular fa-exclamation"
                  title="Password is required"
                ></div>
              )}
            </div>
            <div className="input-container">
              <img
                src={showConfirmPass ? ShowEye : BlockEye}
                alt="icon"
                className="eye"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              />
              <input
                className={"inp"}
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPass ? "text" : "password"}
                onChange={handleChange}
                placeholder="Enter confirm password"
              />
            </div>
            <div className="input-container">
              <input
                className={"inp" + (event.fullname ? " active-inp" : "")}
                id="fullname"
                name="fullname"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter fullname"
                required
              />
              {event.fullname && (
                <div
                  class="fa-regular fa-exclamation"
                  title="Fullname is required"
                ></div>
              )}
            </div>
            <div className="input-container">
              <input
                className={"inp" + (event.phoneNumber ? " active-inp" : "")}
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter phone number"
                required
              />
              {event.phoneNumber && (
                <div
                  class="fa-regular fa-exclamation"
                  title="Phone number is required"
                ></div>
              )}
            </div>
            <div className="input-container">
              <input
                className={"inp"}
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </div>
            <button className="inp login-submit register-submit" type="submit">
              Sign up
            </button>
          </form>
          <div className="login-other rg-other no-select">Or continue with</div>
          <div className="login-list">
            <NavLink className="login-icon google" to="#">
              <img src={GoogleIcon} alt="google-icon" />
            </NavLink>
            <NavLink className="login-icon apple" to="#">
              <img src={AppleIcon} alt="apple-icon" />
            </NavLink>
            <NavLink className="login-icon facebook" to="#">
              <img src={FacebookIcon} alt="facebook-icon" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
