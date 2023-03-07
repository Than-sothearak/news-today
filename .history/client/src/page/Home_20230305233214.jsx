import React, { useEffect, useState } from "react";
import { Post } from "../components/Post";
import { HeroBanner } from "../components/HeroBanner";
import axios from "axios";
export const Home = () => {
  const [posts, setPosts ] = useState([]);

  useEffect(()=>{
    const fatchData = async () =>{
      try {
       const res = await axios.get("/api/posts");
       setPosts(res.data);
      }catch(err){
        console.log(err)
      }
    };
    fatchData();
  }, [])
  return (
    <div className="container mx-auto p-4">
      <div>
        <HeroBanner />
      </div>
      <div
        className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-83
"
      >
        {/* {posts.map((post) => (

          // <Post key={post.id} post={post}  />
        ))} */}

{posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
