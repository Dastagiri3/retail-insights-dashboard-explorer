
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

interface DashboardSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  {
    title: "Overview",
    icon: BarChart3,
    key: "overview",
  },
  {
    title: "Sales Trends",
    icon: TrendingUp,
    key: "trends",
  },
  {
    title: "Products",
    icon: Package,
    key: "products",
  },
  {
    title: "Customers",
    icon: Users,
    key: "customers",
  },
  {
    title: "Regions",
    icon: MapPin,
    key: "regions",
  },
  {
    title: "Reports",
    icon: Calendar,
    key: "reports",
  },
];

export function DashboardSidebar({ activeSection, setActiveSection }: DashboardSidebarProps) {
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
                  <SidebarMenuButton 
                    onClick={() => setActiveSection(item.key)}
                    isActive={activeSection === item.key}
                    className="flex items-center gap-3 w-full"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
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
