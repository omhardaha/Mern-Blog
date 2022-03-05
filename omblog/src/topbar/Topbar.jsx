import React from "react";
import "./Topbar.css";

export default function topbar() {
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
					<li className="topListItem">Home</li>
					<li className="topListItem">About</li>
					<li className="topListItem">Contact</li>
					<li className="topListItem">LogOut</li>
					<li className="topListItem">Write</li>
				</ul>
			</div>
			<div className="topRight">
				<img
					className="topRightImage"
					src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
					alt=""
				/>
				<i className="topLeftIcons fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
}
