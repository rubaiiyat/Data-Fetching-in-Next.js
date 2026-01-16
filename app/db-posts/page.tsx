import React from "react";
import { connectdb } from "../lib/mongodb";
import { Blog } from "@/Models/Post";

const page = async () => {
  await connectdb();

  const posts = await Blog.find().lean();
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">All DB Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id.toString()}
            className="bg-base-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
          >
            <h2 className="text-xl font-semibold mb-2 ">{post.title}</h2>

            <p className="text-sm text-gray-200 mb-4">✍️ {post.author}</p>

            <p className="text-gray-300 line-clamp-4">{post.body}</p>

            <div className="mt-4">
              <button className="text-blue-600 hover:underline text-sm font-medium">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
