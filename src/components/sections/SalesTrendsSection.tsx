
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SalesChart } from "@/components/charts/SalesChart";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

interface SalesTrendsSectionProps {
  dateRange: string;
  region: string;
  category: string;
}

export function SalesTrendsSection({ dateRange, region, category }: SalesTrendsSectionProps) {
  const trendData = [
    {
      title: "Revenue Growth",
      value: "+12.5%",
      description: "vs previous period",
      trend: "up",
      icon: TrendingUp
    },
    {
      title: "Sales Volume",
      value: "+8.2%",
      description: "total units sold",
      trend: "up",
      icon: DollarSign
    },
    {
      title: "Average Order Value",
      value: "-2.1%",
      description: "needs attention",
      trend: "down",
      icon: TrendingDown
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Sales Trends Analysis</h2>
        <p className="text-muted-foreground">
          Detailed analysis of sales performance over time with trend indicators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trendData.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <item.icon className={`h-4 w-4 ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {item.value}
              </div>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales Performance Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesChart dateRange={dateRange} region={region} category={category} />
        </CardContent>
      </Card>
    </div>
  );
}
