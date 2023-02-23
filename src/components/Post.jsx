import classes from "./Post.module.css";

// Purpose: Display a single post, post as in a blog post (more like a tweet in this case)
function Post(props) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
  );
}

export default Post;
