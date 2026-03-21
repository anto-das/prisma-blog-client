import { env } from "@/env";

// No Dynamic and No { cache:no-store } : SSG => Static Page
// {cache:no-store}:SSR => Dynamic Page
// {next:{revalidate:10}}:ISR => Mix between Dynamic and Static.

interface getBlogParams {
  isFeatured?: boolean;
  search?: string;
}

interface getBlogOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export const blogService = {
  getBlog: async (params?: getBlogParams, options?: getBlogOptions) => {
    try {
      const url = new URL(`${env.BACKEND_URL}/posts`);

      // console.log(url.searchParams.append("key", "value"));

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }
      console.log(url.toString());

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.cache) {
        config.next = { revalidate: options.revalidate };
      }

      // console.log(Object.entries(params).forEach([]))

      const res = await fetch(url.toString(), config);
      const data = await res.json();
      // console.log(data.data);
      // return { data, error: null };
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

  getBlogById: async (id: string) => {
    // console.log("post id", id);
    try {
      const res = await fetch(`${env.BACKEND_URL}/posts/${id}`);
      const data = res.json();
      // console.log(data);
      return data;
    } catch (e: any) {
      return { error: e, data: null };
    }
  },
};
