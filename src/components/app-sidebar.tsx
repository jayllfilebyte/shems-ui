import { LucideProps } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Label } from "./ui/label";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { NavUser } from "./nav-user";
import House from "@/models/house";

export function AppSidebar({
  menuItems,
  mainRouting,
  selectedRouting,
  house,
}: {
  menuItems: {
    title: string;
    subRouting: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }[];
  mainRouting: string;
  selectedRouting: string;
  house?: House;
}) {
  return (
    <Sidebar>
      <SidebarHeader className="h-16 shrink-0 gap-2 border-b px-4 place-items-center flex flex-row">
        <Label className="font-bold font-serif">SHEMS</Label>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    variant={
                      selectedRouting === item.subRouting
                        ? "outline"
                        : "default"
                    }
                    asChild
                  >
                    <Link href={`${mainRouting}/${item.subRouting}`}>
                      <item.icon />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser house={house} />
      </SidebarFooter>
    </Sidebar>
  );
}
