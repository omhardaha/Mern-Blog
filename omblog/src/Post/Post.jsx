import "./Post.css";
import { Link } from "react-router-dom"
export default function Post({ post }) {

    return (
        <Link to={`/post/${post._id}`}>
            <div className="post rounded-md">
                {<img
                    className="postImage"
                    src={(post.photo) ? ("http://localhost:5000/images/" + post.photo) : "https://harshatimbers.com/wp-content/themes/harshatimbers/images/no-img.jpg"}
                    alt=""
                />
                }
                <div className="postInfo">
                    <Link to={`/post/${post._id}`}>
                        <span className="font-bold postTitle">
                            {post.title}
                        </span>
                    </Link>
                    <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                    <p className="postDesc">{post.desc}</p>

                    <div className="postCategery">
                        {
                            post.categories.map((c) => (
                                <Link to={`/?cat=${c}`}>
                                    <span className="postCat">#{c}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
}
