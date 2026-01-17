import { Blog } from "@/Models/Post";
import Link from "next/link";
import React from "react";

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const post = await Blog.findById(id).lean();
  console.log(post);

  return (
    <div>
      <section className="min-h-screen bg-gray-950 text-gray-200 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 border-b border-gray-800 pb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-100 leading-tight">
              {post?.title}
            </h1>

            <p className="mt-3 text-sm text-gray-400">
              Blog ID: <span className="text-gray-500">{id}</span>
            </p>
          </div>

          {/* Content */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 shadow-lg">
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {post?.body}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-10 flex items-center justify-between text-sm text-gray-400">
            <span>✍️ Written by Admin</span>
            <span>📅 {new Date().toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn ">
            <Link href={"/db-posts/"}>Back</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
