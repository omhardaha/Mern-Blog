import React from "react";
import "./header.css";
export default function header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<div className="headerTitleSm">React & Node Mern App</div>
				<div className="headerTitleLg">How to make blog on react</div>
			</div>
			<img
            className="headerImage"
				src="https://images.unsplash.com/photo-1646408274632-5078d4604c61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
				alt=""
			/>
		</div>
	);
}
