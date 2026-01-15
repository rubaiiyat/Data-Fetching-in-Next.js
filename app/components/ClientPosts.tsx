"use client";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

/* const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""); */

const ClientPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data: Post[] = await res.json();
        setPosts(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  if (loading) {
    return <p className="text-center mt-5 text-red-500 text-xl">Loading</p>;
  }

  if (error) {
    return error;
  }
  return (
    <div className="grid grid-cols-4 max-w-7xl mx-auto gap-5 mt-10">
      {posts.map((post) => (
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

export default ClientPosts;
