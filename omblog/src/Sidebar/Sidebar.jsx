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
            <div className="sidebarItem">
                <span className="sideBarTitle"> ABOUT</span>
                <img
                    src="https://images.unsplash.com/photo-1602471615287-d733c59b79c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="sideBarImage"
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                    similique, a cum voluptas vitae, numquam corporis enim modi dicta
                    consequuntur commodi id ad quae sequi, eveniet pariatur aliquam nulla
                    vero.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sideBarTitle"> CATEGORIES</span>
                <ul className="sideBarList">
                    {
                        getCategories.map((p) => (
                            <Link to={`/?cat=${p.name}`}>
                        <li className="sideBarListItem"> {p.name} </li>
                            </Link>
                        ))
                    }
                    {/* <li className="sideBarListItem">Life</li>
                    <li className="sideBarListItem">Sports</li>
                    <li className="sideBarListItem">Cinema</li>
                    <li className="sideBarListItem">Syle</li>
                    <li className="sideBarListItem">Tech</li> */}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sideBarTitle"> Follow Us</span>
                <div className="sideBarSocialIcons">
                    <i className="sideBarBottomIcons fa-brands fa-linkedin"></i>
                    <i className="sideBarBottomIcons fa-brands fa-twitter-square"></i>
                    <i className="sideBarBottomIcons fa-brands fa-facebook-square"></i>
                    <i className="sideBarBottomIcons fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
}
