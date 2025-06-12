
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
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "New Customers",
      value: "2,456",
      change: "+12.3%",
      icon: UserPlus,
      color: "text-green-600"
    },
    {
      title: "Retention Rate",
      value: "78.5%",
      change: "+2.1%",
      icon: Repeat,
      color: "text-orange-600"
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
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
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
          <p className="text-sm text-muted-foreground">
            Monthly breakdown of new vs returning customers with enhanced color visualization
          </p>
        </CardHeader>
        <CardContent>
          <CustomerChart dateRange={dateRange} region={region} category={category} />
          <div className="flex justify-center mt-4 space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm text-muted-foreground">Returning Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-sm text-muted-foreground">New Customers</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
