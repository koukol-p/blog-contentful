import React from "react";
import classes from "./PostCard.module.scss";
export default function PostCard({ post }) {
  return (
    <div className={classes.postcard}>
      <h1>{post.fields.title}</h1>
      <p>{post.fields.content.content[0].content[0].value.slice(0, 25)}...</p>
    </div>
  );
}
