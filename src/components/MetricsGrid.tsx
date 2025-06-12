
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Package, Users, BarChart3 } from "lucide-react";

interface MetricsGridProps {
  dateRange: string;
  region: string;
  category: string;
}

export function MetricsGrid({ dateRange, region, category }: MetricsGridProps) {
  // Dynamic data based on filters
  const getMetricsData = () => {
    const baseMetrics = {
      monthly: {
        revenue: 2847392,
        orders: 18247,
        customers: 12847,
        avgOrder: 156.03,
        margin: 24.8,
        returnRate: 3.2
      },
      quarterly: {
        revenue: 8542176,
        orders: 54741,
        customers: 38541,
        avgOrder: 162.15,
        margin: 26.2,
        returnRate: 2.9
      },
      yearly: {
        revenue: 34168704,
        orders: 218964,
        customers: 154164,
        avgOrder: 158.89,
        margin: 25.5,
        returnRate: 3.0
      }
    };

    const regionMultipliers = {
      all: 1,
      north: 0.35,
      south: 0.28,
      east: 0.22,
      west: 0.15
    };

    const categoryMultipliers = {
      all: 1,
      electronics: 0.45,
      clothing: 0.25,
      home: 0.20,
      sports: 0.10
    };

    const data = baseMetrics[dateRange as keyof typeof baseMetrics];
    const regionMult = regionMultipliers[region as keyof typeof regionMultipliers];
    const categoryMult = categoryMultipliers[category as keyof typeof categoryMultipliers];
    
    const multiplier = regionMult * categoryMult;

    return {
      revenue: Math.round(data.revenue * multiplier),
      orders: Math.round(data.orders * multiplier),
      customers: Math.round(data.customers * multiplier),
      avgOrder: data.avgOrder,
      margin: data.margin,
      returnRate: data.returnRate
    };
  };

  const data = getMetricsData();

  const metrics = [
    {
      title: "Total Revenue",
      value: `$${data.revenue.toLocaleString()}`,
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      description: `vs last ${dateRange.slice(0, -2)} period`
    },
    {
      title: "Total Orders",
      value: data.orders.toLocaleString(),
      change: "+8.2%",
      trend: "up", 
      icon: Package,
      description: `vs last ${dateRange.slice(0, -2)} period`
    },
    {
      title: "Active Customers",
      value: data.customers.toLocaleString(),
      change: "+5.7%",
      trend: "up",
      icon: Users,
      description: `vs last ${dateRange.slice(0, -2)} period`
    },
    {
      title: "Avg Order Value",
      value: `$${data.avgOrder.toFixed(2)}`,
      change: "-2.1%",
      trend: "down",
      icon: BarChart3,
      description: `vs last ${dateRange.slice(0, -2)} period`
    },
    {
      title: "Gross Margin",
      value: `${data.margin}%`,
      change: "+1.3%",
      trend: "up",
      icon: TrendingUp,
      description: `vs last ${dateRange.slice(0, -2)} period`
    },
    {
      title: "Return Rate",
      value: `${data.returnRate}%`,
      change: "-0.8%",
      trend: "down",
      icon: TrendingDown,
      description: `vs last ${dateRange.slice(0, -2)} period`
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Filtered by:</span>
        <span className="px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
          {dateRange.charAt(0).toUpperCase() + dateRange.slice(1)}
        </span>
        <span className="px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-md font-medium">
          {region === 'all' ? 'All Regions' : region.charAt(0).toUpperCase() + region.slice(1)}
        </span>
        <span className="px-2 py-1 bg-accent/10 text-accent-foreground rounded-md font-medium">
          {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
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
    </div>
  );
}
