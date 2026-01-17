import { connectdb } from "@/app/lib/mongodb";
import { Blog } from "@/Models/Post";
import { NextResponse } from "next/server";

export async function GET() {
  await connectdb();
  const posts = await Blog.find().lean();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  await connectdb();
  const body = await request.json();
  const newPost = await Blog.create(body);
  return NextResponse.json({
    message: "New blog has been created successfully",
    post: newPost,
  });
}
