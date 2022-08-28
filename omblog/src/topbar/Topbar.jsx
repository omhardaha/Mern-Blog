import React, { useContext } from "react";
import { Context } from "../context/Context";
import "./Topbar.css";

export default function Topbar() {
    const { user, dispatch, setProgress } = useContext(Context);
    const handleLogOut = () => {
        setProgress(50);
        dispatch({ type: "LOG_OUT" });
        setProgress(100);
    };
    const closeTopBar = () => {
        const ip = document.getElementById("active");
        ip.disabled = false;
        console.log(ip);
    };
    return (
        <>
            <div className="topbar-top">
                <h1>
                    Lorem, ipsum  </h1>
            </div>
            <div>
                <input type="checkbox" id="active" />
                <label htmlFor="active" className="menu-btn">
                    <span />
                </label>
                <label htmlFor="active" className="close" />
                <div className="wrapper">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                        <a  title="Go To HomePage" href="/">BLOGS</a>
                        </li>
                        <li>
                            <a href="/setting">Profile</a>
                        </li>
                        <li>
                            <a onClick={handleLogOut} href="/setting">{user && "LOGOUT"}</a>
                        </li>
                        <li>
                        <a  title="Write A New Blog" href="/Write">{user && "Write"}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );
}
