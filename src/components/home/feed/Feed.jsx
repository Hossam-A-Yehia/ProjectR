import { Posts } from "../../../dummyData";
import Post from "../post/Post";
import "./feed.css";

export default function Feed({ pro }) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* {pro && <h3 className="my-2">Products purchased</h3>} */}
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
