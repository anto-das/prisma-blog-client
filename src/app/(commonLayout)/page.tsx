import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/posts.service";
import { Post } from "@/types";

const Home = async () => {
  const { data } = await blogService.getBlog({ isFeatured: false,search:"one" },{cache:"no-store"});
  console.log(data?.data);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-5">
        Length : {data?.data?.data?.length}
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-4 gap-3">
        {data?.data?.data?.map((post: Post) => (
          <BlogCard key={post?.post_id} post={post}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
