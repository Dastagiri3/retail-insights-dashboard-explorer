
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsGrid } from "@/components/MetricsGrid";
import { ChartsSection } from "@/components/ChartsSection";
import { useState } from "react";

const Index = () => {
  const [selectedDateRange, setSelectedDateRange] = useState("monthly");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader 
            selectedDateRange={selectedDateRange}
            setSelectedDateRange={setSelectedDateRange}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="flex-1 p-6 space-y-6">
            <MetricsGrid 
              dateRange={selectedDateRange}
              region={selectedRegion}
              category={selectedCategory}
            />
            <ChartsSection 
              dateRange={selectedDateRange}
              region={selectedRegion}
              category={selectedCategory}
            />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
