import { blogService } from "@/services/posts.service";
import { userServices } from "@/services/user.service";

export default async function Home() {
  // const session = await userServices.getSession();
  // console.log(session.data);
  const { data } = await blogService.getBlog();
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl text-blue-500 font-bold text-center">
        Hello Prisma Blog This is Home Route.....🙂
      </h1>
    </div>
  );
}
