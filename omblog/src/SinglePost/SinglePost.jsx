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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
					deleniti.
					<div className="singlePostEdit">
						<i className="singlePostEdit fa-solid fa-pen-to-square"></i>
						<i className="singlePostEdit fa-solid fa-trash"></i>
					</div>
				</h1>

					<div className="singlePostInfo">
						<span className="singlePostauthorName">
							Author : <b>OM Hardaha</b>
						</span>
						<span className="singlePostDate">1 hour ago</span>
					</div>
					<p className="singlePostParagraph">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Consectetur ipsa sequi dicta ipsam atque? Ad eius maxime deserunt
						aspernatur tempore error optio assumenda accusantium officiis?
						Repellat officiis, eius, sed nam porro officia tempore fuga mollitia
						et velit dicta modi aut. Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Consectetur ipsa sequi dicta ipsam atque? Ad eius
						maxime deserunt aspernatur tempore error optio assumenda accusantium
						officiis? Repellat officiis, eius, sed nam porro officia tempore
						fuga mollitia et velit dicta modi aut. Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Consectetur ipsa sequi dicta ipsam
						atque? Ad eius maxime deserunt aspernatur tempore error optio
						assumenda accusantium officiis? Repellat officiis, eius, sed nam
						porro officia tempore fuga mollitia et velit dicta modi aut. Lorem
						ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ipsa
						sequi dicta ipsam atque? Ad eius maxime deserunt aspernatur tempore
						error optio assumenda accusantium officiis? Repellat officiis, eius,
						sed nam porro officia tempore fuga mollitia et velit dicta modi aut.
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Consectetur ipsa sequi dicta ipsam atque? Ad eius maxime deserunt
						aspernatur tempore error optio assumenda accusantium officiis?
						Repellat officiis, eius, sed nam porro officia tempore fuga mollitia
						et velit dicta modi aut.
					</p>
			</div>
		</div>
	);
}
