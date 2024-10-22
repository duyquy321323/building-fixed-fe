import { NavLink } from "react-router-dom";
import "./HeaderLogin.css"

function HeaderLogin () {
    return (
        <>
            <div className="nav">
                <div className="list-nav">
                    <NavLink to="/" className="tag home"><p>Home</p></NavLink>
                    <NavLink to="/login" className="tag sign-in"><p>Sign in</p></NavLink>
                    <NavLink to="/register" className="tag register"><p>Register</p></NavLink>
                </div>
            </div>
        </>
    );
}

export default HeaderLogin