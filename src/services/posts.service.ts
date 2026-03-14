import { env } from "@/env";

export const blogService = {
  getBlog: async () => {
    try {
      const res = await fetch(`${env.BACKEND_URL}/posts`);
      const data = await res.json();
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
