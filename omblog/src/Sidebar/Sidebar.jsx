import axios from "axios";
import { useEffect, useState } from "react";
import React from "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [getCategories, setCategories] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/category");
            await setCategories(res.data)
        }
        fetchPosts();
    }, [])
    return (
        <div className="sidebar">
            <div className="about-container">
                <h1 className="about-me-heading"> About Me</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a amet et soluta iusto, commodi, unde cum nobis corporis quia quos quas, sunt enim maxime sint? Veritatis voluptates eaque id.</span>
                <div className="sideBarSocialIcons">
                    <a target="_blank" href="https://www.linkedin.com/in/om-prakash-hardaha-5aaabb208/">
                        <i className="sideBarBottomIcons fa-brands fa-linkedin" >
                        </i>

                    </a>
                    <a target="_blank" className="sideBarBottomIcons" href="https://mobile.twitter.com/omhardaha">
                        <i className="sideBarBottomIcons fa-brands fa-twitter-square"></i>
                    </a>
                    <i className="sideBarBottomIcons fa-brands fa-facebook-square"></i>
                    <i className="sideBarBottomIcons fa-brands fa-instagram-square"></i>
                </div>
            </div>
            
            <div className="categories-container">
                <span className="categories-title"> Categories</span>

                    {
                        getCategories.map((p) => (
                            <div className="categories-list">
                            <Link to={`/?cat=${p.name}`}>
                                <li className="sideBarListItem"> {p.name} </li>
                            </Link>
                </div>
                        ))
                    }
            </div>

        </div>
    );
}
