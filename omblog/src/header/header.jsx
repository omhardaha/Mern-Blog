import React from "react";
import "./header.css";
export default function header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<div className="headerTitleSm">React & Node Mern App</div>
				<div className="headerTitleLg">Blog</div>
			</div>
			<img
            className="headerImage"
				src="http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world-og.jpg"
				alt=""
			/>
		</div>
	);
}
