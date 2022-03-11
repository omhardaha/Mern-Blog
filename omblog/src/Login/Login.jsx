import "./Login.css"
import { Link } from "react-router-dom"
export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label htmlFor=""></label>
                <input type="text" placeholder="Enter You Email" />
                <label htmlFor=""></label>
                <input type="password" placeholder="Enter You Email" />
                <button className="loginButton"><Link to="/Login">Login</Link></button>
            </form>
            <button className="loginRegisterButton"><Link to="/Register">Register</Link></button>
        </div>
    )
}
