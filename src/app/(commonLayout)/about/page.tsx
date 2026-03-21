"use client";

import { getBlogPosts } from "@/app/actions/blog.action";
import { blogService } from "@/services/posts.service";
import { useEffect, useState } from "react";

// export const dynamic = "force-dynamic";

const AboutPage = () => {
  const [data, setData] = useState();
  const [error, setError] = useState<{ message: string } | null>(null);
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  console.log("blog data: ", data);
  useEffect(() => {
    (async () => {
      const { data: blogData } = await getBlogPosts();
      setData(blogData);
      setError({ message: "something went wrong." });
    })();
  }, []);

  // throw new Error("something went wrong..");

  return (
    <div className="text-3xl">
      <h1 className="text-3xl text-blue-500 font-bold text-center">
        Hello Prisma Blog This is about Route.....🙂
      </h1>
    </div>
  );
};

export default AboutPage;
