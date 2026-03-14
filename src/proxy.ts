import { NextRequest, NextResponse } from "next/server";
import { userServices } from "./services/user.service";
import { Roles } from "./constants/Roles";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let isAuthenticate = false;
  let isAdmin = false;
  const { data } = await userServices.getSession();
  console.log(data);
  if (data) {
    isAuthenticate = true;
    isAdmin = data.user.role === Roles.admin;
  }
  if (!isAuthenticate) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAdmin && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/user-dashboard", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/user-dashboard",
    "/user-dashboard/:path*",
  ],
};
