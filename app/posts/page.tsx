import React from "react";
import ClientPosts from "../components/ClientPosts";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl mt-10 text-success text-center">Posts</h1>
      <ClientPosts></ClientPosts>
    </div>
  );
};

export default page;
