
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Package, Users, BarChart3 } from "lucide-react";

interface MetricsGridProps {
  dateRange: string;
  region: string;
  category: string;
}

export function MetricsGrid({ dateRange, region, category }: MetricsGridProps) {
  // Mock data - in a real app, this would come from your data service
  const metrics = [
    {
      title: "Total Revenue",
      value: "$2,847,392",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      description: "vs last period"
    },
    {
      title: "Total Orders",
      value: "18,247",
      change: "+8.2%",
      trend: "up", 
      icon: Package,
      description: "vs last period"
    },
    {
      title: "Active Customers",
      value: "12,847",
      change: "+5.7%",
      trend: "up",
      icon: Users,
      description: "vs last period"
    },
    {
      title: "Avg Order Value",
      value: "$156.03",
      change: "-2.1%",
      trend: "down",
      icon: BarChart3,
      description: "vs last period"
    },
    {
      title: "Gross Margin",
      value: "24.8%",
      change: "+1.3%",
      trend: "up",
      icon: TrendingUp,
      description: "vs last period"
    },
    {
      title: "Return Rate",
      value: "3.2%",
      change: "-0.8%",
      trend: "down",
      icon: TrendingDown,
      description: "vs last period"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{metric.value}</div>
            <div className="flex items-center text-xs">
              <span 
                className={`flex items-center ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {metric.change}
              </span>
              <span className="text-muted-foreground ml-1">{metric.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
