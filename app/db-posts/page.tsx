"use client";
import React, { useEffect, useState } from "react";
/* import { connectdb } from "../lib/mongodb";
import { Blog } from "@/Models/Post"; */
import { BlogDb, Inputs } from "@/types/post";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

const BlogPage = () => {
  /*  await connectdb();
  const posts = await Blog.find().lean(); */

  const [posts, setPosts] = useState<BlogDb[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/posts");
      const datas = await res.json();
      setPosts(datas);
    };
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(errors);
    try {
      const res = await fetch("api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const newPost = await res.json();
      setPosts((prev) => [newPost.post, ...prev]);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const deletePost = await fetch(`api/posts/${id}`, {
        method: "DELETE",
      });
      if (!deletePost) {
        return alert("Something went wrong");
      }

      alert("Blog has been deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">All DB Posts</h1>

      <form onSubmit={handleSubmit(onSubmit)} action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-96 border p-5 m-10 mx-auto">
          <label className="label">Title</label>
          <input
            type="text"
            className="input"
            placeholder="Enter the blog title"
            {...register("title")}
          />

          <label className="label">Author</label>
          <input
            type="text"
            className="input"
            placeholder="Enter the Author Name"
            {...register("author")}
          />

          <label className="label">Blog</label>
          <textarea
            className=""
            rows={6}
            placeholder="Enter blog details"
            {...register("blog")}
          />

          <button className="btn btn-success w-xs">Add Post</button>
        </fieldset>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id.toString()}
            className="bg-base-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
          >
            <Link href={`db-posts/${post._id}`}>
              <h2 className="text-xl font-semibold mb-2 ">{post.title}</h2>

              <p className="text-sm text-gray-200 mb-4">✍️ {post.author}</p>

              <p className="text-gray-300 line-clamp-4">
                {post.body || post.blog}
              </p>

              <div className="flex justify-between mt-4">
                <button className="text-blue-600 hover:underline text-sm font-medium">
                  Read more →
                </button>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
