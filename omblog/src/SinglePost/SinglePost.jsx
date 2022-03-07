import "./SinglePost.css";

export default function SinglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="https://images.unsplash.com/photo-1646081499142-3c2945cafdc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					alt=""
					className="singlePostImage"
				/>

                <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deleniti.
                </h1>
			</div>
		</div>
	);
}
