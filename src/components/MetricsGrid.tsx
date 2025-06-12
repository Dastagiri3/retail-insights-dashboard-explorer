
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, ShoppingCart, IndianRupee } from "lucide-react";

interface MetricsGridProps {
  dateRange: string;
  region: string;
  category: string;
}

export function MetricsGrid({ dateRange, region, category }: MetricsGridProps) {
  // Base metrics
  const baseMetrics = {
    revenue: 2456789,
    orders: 15280,
    customers: 8945,
    avgOrder: 1608
  };

  // Calculate dynamic values based on filters
  const getAdjustedMetrics = () => {
    let multiplier = 1;
    
    // Date range multiplier
    const dateMultipliers = { monthly: 1, quarterly: 3, yearly: 12 };
    multiplier *= dateMultipliers[dateRange as keyof typeof dateMultipliers] || 1;
    
    // Region multiplier
    const regionMultipliers = { all: 1, north: 0.35, south: 0.30, east: 0.20, west: 0.15 };
    multiplier *= regionMultipliers[region as keyof typeof regionMultipliers] || 1;
    
    // Category multiplier  
    const categoryMultipliers = { all: 1, electronics: 0.45, clothing: 0.25, home: 0.20, sports: 0.10 };
    multiplier *= categoryMultipliers[category as keyof typeof categoryMultipliers] || 1;
    
    return {
      revenue: Math.round(baseMetrics.revenue * multiplier),
      orders: Math.round(baseMetrics.orders * multiplier),
      customers: Math.round(baseMetrics.customers * multiplier),
      avgOrder: Math.round(baseMetrics.avgOrder * (multiplier * 0.8 + 0.2)) // Less variation for avg order
    };
  };

  const metrics = getAdjustedMetrics();

  const cards = [
    {
      title: "Total Revenue",
      value: `₹${metrics.revenue.toLocaleString()}`,
      icon: IndianRupee,
      trend: "+12.5%",
      description: "vs last period"
    },
    {
      title: "Total Orders",
      value: metrics.orders.toLocaleString(),
      icon: ShoppingCart,
      trend: "+8.2%",
      description: "vs last period"
    },
    {
      title: "New Customers",
      value: metrics.customers.toLocaleString(),
      icon: Users,
      trend: "+15.3%",
      description: "vs last period"
    },
    {
      title: "Avg Order Value",
      value: `₹${metrics.avgOrder.toLocaleString()}`,
      icon: TrendingUp,
      trend: "+5.1%",
      description: "vs last period"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {card.title}
            </CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{card.value}</div>
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-green-600 font-medium">{card.trend}</span>
              <span className="text-muted-foreground">{card.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
