import { NextRequest, NextResponse } from "next/server";
import { userServices } from "./services/user.service";

export async function proxy(request: NextRequest) {
  let isAuthenticate = false;
  let isAdmin = false;
  const { data } = await userServices.getSession();

  if (data) {
    isAuthenticate = true;
  }
  if()

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
