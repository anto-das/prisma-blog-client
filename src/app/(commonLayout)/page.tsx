import { Card } from "@/components/ui/card";
import { blogService } from "@/services/posts.service";
import { BlogCard } from "../../components/modules/homepage/BlogCard";
export default async function Home() {
  // const session = await userServices.getSession();
  // console.log(session.data);
  const { data } = await blogService.getBlog();
  console.log(data);
  return (
    <div className="grid grid-cols-2 w-11/12 gap-4 mx-auto space-y-5">
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
    </div>
  );
}
