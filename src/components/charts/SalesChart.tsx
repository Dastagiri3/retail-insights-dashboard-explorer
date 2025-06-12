
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SalesChartProps {
  dateRange: string;
  region: string;
  category: string;
}

export function SalesChart({ dateRange, region, category }: SalesChartProps) {
  const getChartData = () => {
    const monthlyData = [
      { month: 'Jan', revenue: 245000, orders: 1200 },
      { month: 'Feb', revenue: 278000, orders: 1350 },
      { month: 'Mar', revenue: 298000, orders: 1420 },
      { month: 'Apr', revenue: 325000, orders: 1580 },
      { month: 'May', revenue: 267000, orders: 1290 },
      { month: 'Jun', revenue: 345000, orders: 1650 },
      { month: 'Jul', revenue: 378000, orders: 1780 },
      { month: 'Aug', revenue: 356000, orders: 1690 },
      { month: 'Sep', revenue: 389000, orders: 1850 },
      { month: 'Oct', revenue: 412000, orders: 1920 },
      { month: 'Nov', revenue: 445000, orders: 2050 },
      { month: 'Dec', revenue: 478000, orders: 2180 }
    ];

    const quarterlyData = [
      { month: 'Q1', revenue: 821000, orders: 3970 },
      { month: 'Q2', revenue: 937000, orders: 4520 },
      { month: 'Q3', revenue: 1123000, orders: 5320 },
      { month: 'Q4', revenue: 1335000, orders: 6150 }
    ];

    const yearlyData = [
      { month: '2021', revenue: 3200000, orders: 15600 },
      { month: '2022', revenue: 3800000, orders: 18200 },
      { month: '2023', revenue: 4200000, orders: 19800 },
      { month: '2024', revenue: 4800000, orders: 21600 }
    ];

    let data = dateRange === 'quarterly' ? quarterlyData : 
                dateRange === 'yearly' ? yearlyData : monthlyData;

    // Apply region filter
    const regionMultipliers = {
      all: 1,
      north: 0.35,
      south: 0.28,
      east: 0.22,
      west: 0.15
    };

    // Apply category filter
    const categoryMultipliers = {
      all: 1,
      electronics: 0.45,
      clothing: 0.25,
      home: 0.20,
      sports: 0.10
    };

    const regionMult = regionMultipliers[region as keyof typeof regionMultipliers];
    const categoryMult = categoryMultipliers[category as keyof typeof categoryMultipliers];
    const multiplier = regionMult * categoryMult;

    return data.map(item => ({
      ...item,
      revenue: Math.round(item.revenue * multiplier),
      orders: Math.round(item.orders * multiplier)
    }));
  };

  const data = getChartData();

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Showing {dateRange} data for {region === 'all' ? 'all regions' : region} 
        {category !== 'all' && ` in ${category} category`}
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="month" 
              className="text-muted-foreground"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              yAxisId="revenue"
              orientation="left"
              className="text-muted-foreground"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`}
            />
            <YAxis 
              yAxisId="orders"
              orientation="right"
              className="text-muted-foreground"
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
              formatter={(value, name) => [
                name === 'revenue' ? `$${Number(value).toLocaleString()}` : value,
                name === 'revenue' ? 'Revenue' : 'Orders'
              ]}
            />
            <Legend />
            <Line 
              yAxisId="revenue"
              type="monotone" 
              dataKey="revenue" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              name="Revenue"
            />
            <Line 
              yAxisId="orders"
              type="monotone" 
              dataKey="orders" 
              stroke="hsl(var(--secondary-foreground))" 
              strokeWidth={2}
              name="Orders"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
