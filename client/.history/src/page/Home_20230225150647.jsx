import React from 'react'
import { posts } from "../../data";
import { Post } from "../components/Post"
import { HeroBanner } from '../components/HeroBanner';
export const Home = () => {
  return (
    <div>
      <div>
        <HeroBanner />
      </div>
      <div className='grid grid-cols-3 gap-4 hover:grid-cols-3'>
      {posts.map(post=>(
        <Post key={post.id} post={post}/>
      ))}
    </div>
    </div>
    
  )
}
