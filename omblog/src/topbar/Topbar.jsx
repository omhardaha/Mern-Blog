import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

export default function topbar() {
    const user = true;
    return (
        <div className="topbar">
            <div className="topLeft">
                <i className="topLeftIcons fa-brands fa-linkedin"></i>
                <i className="topLeftIcons fa-brands fa-twitter-square"></i>
                <i className="topLeftIcons fa-brands fa-facebook-square"></i>
                <i className="topLeftIcons fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    {/* <li className="topListItem"> <Link>Home</Link> </li> */}
                    <li className="topListItem">  <Link to="/">Home</Link></li>
                    <li className="topListItem">  <Link to="/">About</Link></li>
                    <li className="topListItem"> <Link to="/Write">{user && "Write"}</Link></li>
                    <li className="topListItem"> <Link to="/LogOut">{user && "LogOut"}</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {(user) ?
                    (<img
                        className="topRightImage"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt=""
                    />)
                    : (
                        <ul className="topList">
                            <li className="topListItem"> <Link to="/Login">Login</Link></li>
                            <li className="topListItem"> <Link to="/Register">Register</Link></li>
                        </ul>
                    )}
                <i className="topLeftIcons fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}
