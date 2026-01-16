import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServerPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://fakestoreapi.com/products");
  const posts = await res.json();
  return (
    <div className="grid grid-cols-4 max-w-7xl mx-auto gap-5 mt-10">
      {posts.map((post: Post) => (
        <div key={post.id} className="bg-base-200 p-5 space-y-3">
          <Image
            className="h-44 mx-auto"
            src={post.image}
            alt={post.title}
            width={150}
            height={200}
          />
          <h1 className="text-xl text-success">{post.title}</h1>
          <p className="text-gray-300">
            {post.description.slice(0, 100)}....
            <Link className="text-blue-500" href={`/posts/${post.id}`}>
              More
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServerPosts;
