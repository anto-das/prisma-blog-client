import { authClient } from "@/lib/auth-client";
import { getSession } from "better-auth/api";
import { cookies } from "next/headers";

export const userServices = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();
      console.log(cookieStore.getAll());
      const session = await authClient.getSession();

      const res = await fetch("http://localhost:5000/api/auth/get-session", {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });
      return {data:res.data}
      // console.log(await res.json());
    } catch (err) {}
  },
};
