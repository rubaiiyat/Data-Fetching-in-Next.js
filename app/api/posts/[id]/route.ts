import { connectdb } from "@/app/lib/mongodb";
import { Blog } from "@/Models/Post";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectdb();

  const { id } = await params;
  const post = await Blog.findById(id).lean();
  console.log(post);
  if (!post) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  await connectdb();
  const { id } = await params;
  const post = await Blog.findByIdAndDelete(id);

  if (!post) {
    return new Response("Blog is not found", { status: 404 });
  }
  return NextResponse.json(post);
}
