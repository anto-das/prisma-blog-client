import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/posts.service";
import { Blog } from "@/types";

const Home = async () => {
  await new Promise((resolve) =>setTimeout(resolve,3000));
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  const { data } = await blogService.getBlog();
  console.log(data);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-5">
        Length : {data.length}
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-4 gap-3">
        {data?.map((post: Blog) => (
          <BlogCard key={post?.post_id} post={post}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
