import React from "react";
import { posts } from "../../data";
import { Post } from "../components/Post";
import { HeroBanner } from "../components/HeroBanner";
export const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
        <HeroBanner />
      </div>
      <div
        className="mt-10 grid grid-cols-2 gap-y-9 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-83
"
      >
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
