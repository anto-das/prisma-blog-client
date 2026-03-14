import { env } from "@/env";
import { authClient } from "@/lib/auth-client";
import { getSession } from "better-auth/api";
import { cookies } from "next/headers";

const AUTH_URL = env.AUTH_URL;

export const userServices = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();
      // console.log("get all cookie", cookieStore.getAll());
      // const session = await authClient.getSession();

      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });
      const session = await res.json();
      if (session === null) {
        return { data: null, error: { message: "somthing went wrong.." } };
      }
      return { data: session, error: null };
      // console.log(await res.json());
    } catch (err) {
      return { data: null, error: { message: "something went wrong..." } };
    }
  },
};
