import "./Posts.css";
import Post from "../Post/Post";

export default function Posts({ getPosts }) {
    return <div className="home grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1  gap-8 ">
        {
            getPosts.map((p) => (
                <div className="col-span-1">
                    <Post post={p} />
                </div>
            ))
        }
    </div>;
}
