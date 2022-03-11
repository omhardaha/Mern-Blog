import { Link } from "react-router-dom"
import "./Register.css"
export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Register</span>
            <form action="" className="loginForm">
                <label htmlFor=""></label>
                <input type="text" placeholder="Enter You UserName" />
                <label htmlFor=""></label>
                <input type="text" placeholder="Enter You Email" />
                <label htmlFor=""></label>
                <input type="password" placeholder="Enter You Email" />
                <button className="loginButton">
                     <Link to="/Register">Register</Link> </button>
            </form>
            <button className="loginRegisterButton">
                <Link to="/Login">Login</Link></button>
        </div>
    )
}
