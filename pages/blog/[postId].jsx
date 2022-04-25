import { useRouter } from 'next/router'
import React from 'react'

export default function Post() {
    const router = useRouter()
    
  return (
    <div>Post no. {router.query.postId}</div>
  )
}
