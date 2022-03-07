import "./Post.css";

export default function Post() {
	return (
		<div className="post">
			<img
				className="postImage"
				src="https://images.unsplash.com/photo-1646343588889-07753bb55abf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCategery">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">
					Lorem ipsum dolor sit amet, consectetur{" "}
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
                <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam corrupti laudantium ratione voluptatum iusto voluptate, ea asperiores ipsam eligendi odio consequatur eum natus atque dolorem velit. Iste delectus exercitationem dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim nobis autem deleniti harum placeat ullam, earum consequatur itaque dignissimos incidunt consectetur reprehenderit porro inventore, modi non, repudiandae quis provident?</p>
			</div>
		</div>
	);
}
