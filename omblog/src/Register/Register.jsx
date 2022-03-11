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
                <button className="loginButton">Register</button>
            </form>
            <button className="loginRegisterButton">Login</button>
        </div>
    )
}
