import React from 'react'
import { posts } from "../../data";
import { Post } from "../components/Post"
export const Home = () => {
  return (
    <div>
      <div>
        Banner
      </div>
      <div>
      {posts.map(post=>(
        <Post key={post.id} post={post}/>
      ))}
    </div>
    </div>
    
  )
}
