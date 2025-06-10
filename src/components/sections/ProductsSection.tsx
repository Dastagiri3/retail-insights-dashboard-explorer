
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductChart } from "@/components/charts/ProductChart";
import { Badge } from "@/components/ui/badge";

interface ProductsSectionProps {
  dateRange: string;
  region: string;
  category: string;
}

export function ProductsSection({ dateRange, region, category }: ProductsSectionProps) {
  const topProducts = [
    { name: "Premium Headphones", revenue: "$234,500", growth: "+15%" },
    { name: "Smart Watch Series X", revenue: "$198,200", growth: "+22%" },
    { name: "Wireless Speakers", revenue: "$156,800", growth: "+8%" },
    { name: "Gaming Console", revenue: "$145,300", growth: "+12%" },
    { name: "Fitness Tracker", revenue: "$123,700", growth: "+18%" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Products Analysis</h2>
        <p className="text-muted-foreground">
          Comprehensive analysis of product performance and category insights
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Product Category Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductChart dateRange={dateRange} region={region} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">Revenue: {product.revenue}</p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {product.growth}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
