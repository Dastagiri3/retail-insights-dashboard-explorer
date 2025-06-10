
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsGrid } from "@/components/MetricsGrid";
import { ChartsSection } from "@/components/ChartsSection";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { SalesTrendsSection } from "@/components/sections/SalesTrendsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { CustomersSection } from "@/components/sections/CustomersSection";
import { RegionsSection } from "@/components/sections/RegionsSection";
import { ReportsSection } from "@/components/sections/ReportsSection";
import { useState } from "react";

const Index = () => {
  const [selectedDateRange, setSelectedDateRange] = useState("monthly");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSection, setActiveSection] = useState("overview");

  const renderActiveSection = () => {
    const commonProps = {
      dateRange: selectedDateRange,
      region: selectedRegion,
      category: selectedCategory,
    };

    switch (activeSection) {
      case "overview":
        return <OverviewSection {...commonProps} />;
      case "trends":
        return <SalesTrendsSection {...commonProps} />;
      case "products":
        return <ProductsSection {...commonProps} />;
      case "customers":
        return <CustomersSection {...commonProps} />;
      case "regions":
        return <RegionsSection {...commonProps} />;
      case "reports":
        return <ReportsSection {...commonProps} />;
      default:
        return <OverviewSection {...commonProps} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
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
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
