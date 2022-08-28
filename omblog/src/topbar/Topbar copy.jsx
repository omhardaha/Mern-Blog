import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
export default function Topbar() {

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
                    <li className="topListItem">  <Link title="Go To HomePage" to="/">BLOGS</Link></li>
                    <li className="topListItem"> </li>
                </ul>
            </div>
            <div className="topRight">
                {(user) ?
                    (
                        <>
                            <Link title="Profile" to="/setting">
                                <img
                                    className="topRightImage"
                                    src={"http://localhost:5000/images/" + user.profilePic || "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"}
                                    alt=""
                                />
                            </Link>

                            <li className="topListItem" title="LogOut This Page" >  </li>
                        </>

                    )
                    : (
                        <ul className="topList">
                            <li className="topListItem"> <Link title="Login" to="/Login">Login</Link></li>
                            <li className="topListItem"> <Link title="Create New Account" to="/Register">Register</Link></li>
                        </ul>
                    )}
            </div>

        </div>
    );
}
