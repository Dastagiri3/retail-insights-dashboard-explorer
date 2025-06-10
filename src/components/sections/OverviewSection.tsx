
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricsGrid } from "@/components/MetricsGrid";
import { ChartsSection } from "@/components/ChartsSection";

interface OverviewSectionProps {
  dateRange: string;
  region: string;
  category: string;
}

export function OverviewSection({ dateRange, region, category }: OverviewSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Complete overview of your retail performance metrics and key insights
        </p>
      </div>
      
      <MetricsGrid 
        dateRange={dateRange}
        region={region}
        category={category}
      />
      
      <ChartsSection 
        dateRange={dateRange}
        region={region}
        category={category}
      />
    </div>
  );
}
