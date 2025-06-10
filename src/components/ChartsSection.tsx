
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SalesChart } from "./charts/SalesChart";
import { RegionalChart } from "./charts/RegionalChart";
import { ProductChart } from "./charts/ProductChart";
import { CustomerChart } from "./charts/CustomerChart";

interface ChartsSectionProps {
  dateRange: string;
  region: string;
  category: string;
}

export function ChartsSection({ dateRange, region, category }: ChartsSectionProps) {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="sales" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="sales">Sales Trends</TabsTrigger>
          <TabsTrigger value="regions">Regional Performance</TabsTrigger>
          <TabsTrigger value="products">Product Analysis</TabsTrigger>
          <TabsTrigger value="customers">Customer Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sales" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue & Sales Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <SalesChart dateRange={dateRange} region={region} category={category} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="regions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales by Region</CardTitle>
            </CardHeader>
            <CardContent>
              <RegionalChart dateRange={dateRange} category={category} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="products" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Products & Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ProductChart dateRange={dateRange} region={region} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="customers" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CustomerChart dateRange={dateRange} region={region} category={category} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
