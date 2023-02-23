import Post from "./Post";
import classes from "./Postslist.module.css";

const posts = [
  { author: "faberNyx", body: "React is awesome!!!" },
  { author: "Nekomaymay", body: "check this class!!!" },
];

function PostsList() {
  return (
    <ul className={classes.posts}>
      {posts.map((post, index) => (
        <Post key={index} author={post.author} body={post.body} />
      ))}
    </ul>
  );
}

export default PostsList;
