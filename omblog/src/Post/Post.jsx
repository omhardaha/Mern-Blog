import "./Post.css";
import {Link} from "react-router-dom"
export default function Post({ post }) {
    return (
        <div className="post">
            {post.photo &&
            <img
                className="postImage"
                src={post.photo}
                alt=""
            />
            }
            <div className="postInfo">
                <div className="postCategery">
                    {
                        post.categories.map((c) => (
                            
                            <Link to={`/?cat=${c}`}>
                            <span className="postCat">{c}</span>
                            </Link>
                        ))
                    }
                </div>
                <Link to={`/post/${post._id}`}>
                <span className="postTitle">
                    {post.title}
                </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDesc">{post.desc}</p>
            </div>
        </div>
    );
}
