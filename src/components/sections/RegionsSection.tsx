
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RegionalChart } from "@/components/charts/RegionalChart";
import { MapPin } from "lucide-react";

interface RegionsSectionProps {
  dateRange: string;
  region: string;
  category: string;
}

export function RegionsSection({ dateRange, region, category }: RegionsSectionProps) {
  const regionData = [
    { name: "North Region", revenue: "$856,000", growth: "+12%", color: "bg-blue-500" },
    { name: "South Region", revenue: "$742,000", growth: "+8%", color: "bg-green-500" },
    { name: "East Region", revenue: "$689,000", growth: "+15%", color: "bg-yellow-500" },
    { name: "West Region", revenue: "$598,000", growth: "+5%", color: "bg-red-500" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Regional Performance</h2>
        <p className="text-muted-foreground">
          Geographic analysis of sales performance across different regions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {regionData.map((region, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{region.name}</CardTitle>
              <div className={`w-3 h-3 rounded-full ${region.color}`}></div>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">{region.revenue}</div>
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
