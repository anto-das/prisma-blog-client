"use server";

import { blogService } from "@/services/posts.service";

export const getBlogPosts = async () => {
  return await blogService.getBlog();
};
