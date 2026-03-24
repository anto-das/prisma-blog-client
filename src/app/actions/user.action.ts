"use server";

import { userServices } from "@/services/user.service";

export const getUserInfo = async () => {
  return await userServices.getSession();
};
