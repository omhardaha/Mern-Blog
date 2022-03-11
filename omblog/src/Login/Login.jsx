import "./Login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label htmlFor=""></label>
                <input type="text" placeholder="Enter You Email" />
                <label htmlFor=""></label>
                <input type="password" placeholder="Enter You Email" />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>
        </div>
    )
}
