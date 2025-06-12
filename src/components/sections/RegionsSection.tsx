
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RegionalChart } from "@/components/charts/RegionalChart";
import { MapPin } from "lucide-react";

interface RegionsSectionProps {
  dateRange: string;
  region: string;
  category: string;
}

export function RegionsSection({ dateRange, region, category }: RegionsSectionProps) {
  const getRegionData = () => {
    const baseRegions = [
      { name: "North Region", revenue: 856000, growth: "+12%", color: "bg-blue-500" },
      { name: "South Region", revenue: 742000, growth: "+8%", color: "bg-green-500" },
      { name: "East Region", revenue: 689000, growth: "+15%", color: "bg-yellow-500" },
      { name: "West Region", revenue: 598000, growth: "+5%", color: "bg-red-500" },
    ];

    // Apply filters
    const dateMultipliers = { monthly: 1, quarterly: 3, yearly: 12 };
    const categoryMultipliers = { all: 1, electronics: 0.45, clothing: 0.25, home: 0.20, sports: 0.10 };
    
    const dateMult = dateMultipliers[dateRange as keyof typeof dateMultipliers];
    const categoryMult = categoryMultipliers[category as keyof typeof categoryMultipliers];
    const multiplier = dateMult * categoryMult;

    let filteredRegions = baseRegions;
    if (region !== 'all') {
      filteredRegions = baseRegions.filter(r => 
        r.name.toLowerCase().includes(region.toLowerCase())
      );
    }

    return filteredRegions.map(r => ({
      ...r,
      revenue: Math.round(r.revenue * multiplier)
    }));
  };

  const regionData = getRegionData();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Regional Performance</h2>
        <p className="text-muted-foreground">
          Geographic analysis of sales performance across different regions
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
            {dateRange.charAt(0).toUpperCase() + dateRange.slice(1)} View
          </span>
          <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full">
            {region === 'all' ? 'All Regions' : region.charAt(0).toUpperCase() + region.slice(1)}
          </span>
          <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full">
            {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {regionData.map((region, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{region.name}</CardTitle>
              <div className={`w-3 h-3 rounded-full ${region.color}`}></div>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">${region.revenue.toLocaleString()}</div>
              <p className="text-xs text-green-600">{region.growth} growth</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Regional Sales Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <RegionalChart dateRange={dateRange} category={category} />
        </CardContent>
      </Card>
    </div>
  );
}
