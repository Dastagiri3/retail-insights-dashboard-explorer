
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SalesChartProps {
  dateRange: string;
  region: string;
  category: string;
}

export function SalesChart({ dateRange, region, category }: SalesChartProps) {
  // Mock data - replace with real data
  const data = [
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

  return (
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
  );
}
