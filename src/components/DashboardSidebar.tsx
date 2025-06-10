
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { BarChart3, TrendingUp, Users, Package, MapPin, Calendar } from "lucide-react";

const menuItems = [
  {
    title: "Overview",
    icon: BarChart3,
    url: "#overview",
  },
  {
    title: "Sales Trends",
    icon: TrendingUp,
    url: "#trends",
  },
  {
    title: "Products",
    icon: Package,
    url: "#products",
  },
  {
    title: "Customers",
    icon: Users,
    url: "#customers",
  },
  {
    title: "Regions",
    icon: MapPin,
    url: "#regions",
  },
  {
    title: "Reports",
    icon: Calendar,
    url: "#reports",
  },
];

export function DashboardSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="p-6">
        <h2 className="text-lg font-semibold text-foreground">Retail Analytics</h2>
        <p className="text-sm text-muted-foreground">Sales Performance Dashboard</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
