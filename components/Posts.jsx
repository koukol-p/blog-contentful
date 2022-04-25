import React from 'react'
import PostCard from './PostCard';

export default function Posts({posts}) {
    console.log("POSTS", posts)
    return (
        <div>
            {posts.map(post => {
                return(
                <PostCard key={post.sys.id} post={post}/>)
            })}
        </div>
        
      );
}
