import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import AppleIcon from "../../assets/image/Shape.svg";
import GoogleIcon from "../../assets/image/Wrapper.svg";
import BlockEye from "../../assets/image/blockeye.svg";
import FacebookIcon from "../../assets/image/facebook.svg";
import ShowEye from "../../assets/image/showeye.svg";
import { login } from "../../components/actions";
import api from "../../components/api";
import "./Login.css";

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    username: false,
    password: false,
  });
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("account/login", userInfo);
      dispatch(login(response.data));
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("expiryTime", response.data.expiryTime);
      navigate('/');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
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
      <div className="login-container">
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
            <div className="login-forget">
              <NavLink to="#" className="login-link-fg">
                Recover Password?
              </NavLink>
            </div>
            <button className="inp login-submit" type="submit">
              Sign in
            </button>
          </form>
          <div className="login-other no-select">Or continue with</div>
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

export default Login;
