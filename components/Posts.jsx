import React from 'react'
import PostCard from './PostCard';
import classes from "./Posts.module.scss"
export default function Posts({posts}) {
    console.log("POSTS", posts)
    return (
        <div className={classes.postsContainer}>
            {posts.map(post => {
                return(
                <PostCard key={post.sys.id} post={post}/>
            )
            })}
            
            
        </div>
        
      );
}
