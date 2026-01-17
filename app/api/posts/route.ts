import { connectdb } from "@/app/lib/mongodb";
import { Blog } from "@/Models/Post";
import { NextResponse } from "next/server";

export async function GET() {
  await connectdb();
  const posts = await Blog.find().lean();
  return NextResponse.json(posts);
}
