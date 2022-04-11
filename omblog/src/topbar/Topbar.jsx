import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./Topbar.css";
export default function Topbar() {
    const { user, dispatch, setProgress } = useContext(Context);
    const handleLogOut = () => {
        setProgress(50)
        dispatch({ type: "LOG_OUT" })
        setProgress(100)
    }
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
                    <li className="topListItem">  <Link to="/">HOME</Link></li>
                    <li className="topListItem">  <Link to="/">ABOUT</Link></li>
                    <li className="topListItem"> <Link to="/Write">{user && "WRITE"}</Link></li>
                    <li className="topListItem" onClick={handleLogOut}> {user && "LOGOUT"} </li>
                </ul>
            </div>
            <div className="topRight">
                {(user) ?
                    (
                        <Link to="/setting">
                    <img
                        className="topRightImage"
                        src={user.profilePic || "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"}
                        alt=""
                        />
                        </Link>
                    )
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
