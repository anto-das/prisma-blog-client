import { authClient } from "@/lib/auth-client";
import { cookies } from "next/headers";

export default async function Home() {
  // const session = await authClient.getSession();
  // console.log(session)
  const cookieStore = await cookies();
  console.log(cookieStore.getAll());
  const session = await authClient.getSession();

  const res = await fetch(
    "https://medi-store-eight.vercel.app/api/auth/get-session",
    {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    },
  );
  console.log(await res.json());
  return (
    <div>
      <h1 className="text-3xl text-blue-500 font-bold text-center">
        Hello Prisma Blog This is Home Route.....🙂
      </h1>
    </div>
  );
}
