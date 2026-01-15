import React from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};
const page = async ({ params }: Props) => {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Faild to fetch product");
  }
  const post = await res.json();
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default page;
