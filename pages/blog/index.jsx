import { createClient } from 'contentful';
import React from 'react'
import PostCard from '../../components/PostCard';
import Posts from '../../components/Posts';

export async function getStaticProps() {
    const client = createClient({ 
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
     })
     const res = await client.getEntries({content_type: "blogPost"});
     return {
         props: {
             posts: res
         },
         revalidate: 3600
     }
}

export default function BlogPage(props) {
  return (
      <Posts posts={props.posts.items} />
  )
}
