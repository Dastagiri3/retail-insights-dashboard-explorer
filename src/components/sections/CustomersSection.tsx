
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomerChart } from "@/components/charts/CustomerChart";
import { Users, UserPlus, Repeat } from "lucide-react";

interface CustomersSectionProps {
  dateRange: string;
  region: string;
  category: string;
}

export function CustomersSection({ dateRange, region, category }: CustomersSectionProps) {
  const customerMetrics = [
    {
      title: "Total Customers",
      value: "12,847",
      change: "+5.7%",
      icon: Users
    },
    {
      title: "New Customers",
      value: "2,456",
      change: "+12.3%",
      icon: UserPlus
    },
    {
      title: "Retention Rate",
      value: "78.5%",
      change: "+2.1%",
      icon: Repeat
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Customer Analytics</h2>
        <p className="text-muted-foreground">
          Deep insights into customer behavior, acquisition, and retention patterns
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {customerMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-green-600">{metric.change} vs last period</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Acquisition Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <CustomerChart dateRange={dateRange} region={region} category={category} />
        </CardContent>
      </Card>
    </div>
  );
}
