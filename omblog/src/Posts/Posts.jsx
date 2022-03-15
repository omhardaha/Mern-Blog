import "./Posts.css";
import Post from "../Post/Post";

export default function Posts({ getPosts }) {
    return <div className="posts">
        {
            getPosts.map((p) => (
                <Post post={p} />
            ))
        }
    </div>;
}
