"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      {items.map((item, idx) => (
        <SidebarMenuItem key={idx}>
          <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
          {item.items?.map((subItem, idx) => (
            <SidebarMenuSubButton asChild key={idx}>
              <Link href={subItem.url}>
                <span>{subItem.title}</span>
              </Link>
            </SidebarMenuSubButton>
          ))}
        </SidebarMenuItem>
      ))}
    </SidebarGroup>
  );
}
