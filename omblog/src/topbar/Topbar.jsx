import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./Topbar.css";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai"

export default function Topbar() {
    const { user, dispatch, setProgress } = useContext(Context);
    const handleLogOut = () => {
        setProgress(50);
        dispatch({ type: "LOG_OUT" });
        setProgress(100);
    };
    return (
        <>
            <div className="topbar-top mx-2 flex space-between max-w-screen-lg justify-between text-black lg:mx-auto ">

                <div className="hidden md:block">
                    <span>
                        <AiOutlineInstagram className="inline mr-4 cursor-pointer" />
                        <AiOutlineTwitter className="inline mr-4 cursor-pointer" />
                        <AiFillLinkedin className="inline mr-4 cursor-pointer" />
                    </span>
                </div>
                <div className="">
                    <Link className="font-bold text-xl" to={"/"}>
                        OMBLOG
                    </Link>
                </div>

                <div className=" gap-3 hidden md:flex">
                    <Link to={"/setting"}>
                        Profile
                    </Link>
                    {user ? <Link className="ml-2" to={"/write"}>
                        Write A New Blog
                    </Link>: <>
                    <Link className="ml-2" to={"/login"}>
                        Login
                    </Link>
                    </>
                    
                    }
                </div>


                <div className="md:hidden max-w-screen-sm">
                    <input type="checkbox" id="active" />
                    <label htmlFor="active" className="menu-btn text-black">
                        <span />
                    </label>
                    <label htmlFor="active" className="close text-black" />
                    <div className="wrapper">
                        <ul>
                            <li>
                                <a href="/">HOME</a>
                            </li>
                            <li>
                                <a title="Go To HomePage" href="/">BLOGS</a>
                            </li>
                            <li>
                                <a href="/setting">PROFILE</a>
                            </li>
                            <li>
                                <a title="Write A New Blog" href="/Write">{user && "WRITE"}</a>
                            </li>
                            <li>
                                
                                <AiOutlineInstagram className="inline mr-4" />
                                <AiOutlineTwitter className="inline mr-4" />
                                <AiFillLinkedin className="inline mr-4" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </>

    );
}
