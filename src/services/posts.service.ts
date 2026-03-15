import { env } from "@/env";

// No Dynamic and No { cache:no-store } : SSG => Static Page
// {cache:no-store}:SSR => Dynamic Page
// {next:{revalidate:10}}:ISR => Mix between Dynamic and Static.

export const blogService = {
  getBlog: async () => {
    try {
      const res = await fetch(`${env.BACKEND_URL}/posts`, {
        next: { revalidate: 10 },
      });
      const data = await res.json();
      console.log(data.data);
      return { data, error: null };
    } catch (err: any) {
      return {
        data: null,
        error: {
          message: err.message,
        },
      };
    }
  },
};
