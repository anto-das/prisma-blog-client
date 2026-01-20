import { authClient } from "@/lib/auth-client";

export default async function Home() {
  const session = await authClient.getSession();
  console.log(session)
  return (
    <div>
      <h1 className="text-3xl text-blue-500 font-bold text-center">
        Hello Prisma Blog This is Home Route.....🙂
      </h1>
    </div>
  );
}
