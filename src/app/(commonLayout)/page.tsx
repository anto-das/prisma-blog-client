import { authClient } from "@/lib/auth-client";
import { userServices } from "@/services/user.service";
import { cookies } from "next/headers";

export default async function Home() {
  // const session = await authClient.getSession();
  // console.log(session)
  // const cookieStore = await cookies();
  // console.log(cookieStore.getAll());
  // const session = await authClient.getSession();

  // const res = await fetch(
  //   "http://localhost:5000/api/auth/get-session",
  //   {
  //     headers: {
  //       Cookie: cookieStore.toString(),
  //     },
  //     cache: "no-store",
  //   },
  // );
  // // console.log(await res.json());
  const session = await userServices.getSession();
  console.log(session);
  return (
    <div>
      <h1 className="text-3xl text-blue-500 font-bold text-center">
        Hello Prisma Blog This is Home Route.....🙂
      </h1>
    </div>
  );
}
