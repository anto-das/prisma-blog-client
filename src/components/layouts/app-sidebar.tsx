"use client";

import { NavMain } from "@/components/layouts/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { adminRoutes } from "@/Routes/adminRoutes";
import { userRoutes } from "@/Routes/userRoutes";
import { Route } from "@/types";

export function AppSidebar({
  user,
  ...props
}: { user: { role: string } } & React.ComponentProps<typeof Sidebar>) {
  let routes: Route[] = [];
  switch (user.role) {
    case "admin":
      routes = adminRoutes;
      break;
    case "user":
      routes = userRoutes;
      break;
    default:
      routes = [];
      break;
  }
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <NavMain items={routes} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
