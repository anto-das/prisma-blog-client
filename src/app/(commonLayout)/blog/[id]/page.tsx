import { env } from "@/env";
import { blogService } from "@/services/posts.service";
import { Blog } from "@/types";

// const { data } = await blogService.getBlog();
export const dynamicParams = false // true | false
export async function generateStaticParams() {
  const { data } = await blogService.getBlog();
  return data.map((post: Blog) => ({ id: post.post_id })).slice(0,3);
}

// console.log("this is data: ",data)
// const postIds = data.map((post: Blog) => ({ id: post.post_id }));
// console.log("post id :",postIds)

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await blogService.getBlogById(id);
  return (
    <div>
      <h1 className="text-3xl text-center text-blue-500">
        {data?.data?.post_id}{" "}
      </h1>
      <h2 className="text-center text-2xl font-bold text-amber-500">
        {data?.data?.title}
      </h2>
    </div>
  );
};

export default Page;
