import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./Postslist.module.css";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "whyte" }}>
          <h2>No posts yet!</h2>
          <p>Be the first to post something!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
