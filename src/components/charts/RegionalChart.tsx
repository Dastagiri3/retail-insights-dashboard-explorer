
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RegionalChartProps {
  dateRange: string;
  category: string;
}

export function RegionalChart({ dateRange, category }: RegionalChartProps) {
  const data = [
    { region: 'North', revenue: 856000, customers: 3420, orders: 4850 },
    { region: 'South', revenue: 742000, customers: 2890, orders: 4120 },
    { region: 'East', revenue: 689000, customers: 2650, orders: 3890 },
    { region: 'West', revenue: 598000, customers: 2340, orders: 3420 }
  ];

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="region" 
            className="text-muted-foreground"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            className="text-muted-foreground"
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px'
            }}
            formatter={(value, name) => [
              name === 'revenue' ? `$${Number(value).toLocaleString()}` : Number(value).toLocaleString(),
              name === 'revenue' ? 'Revenue' : name === 'customers' ? 'Customers' : 'Orders'
            ]}
          />
          <Legend />
          <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Revenue" />
          <Bar dataKey="customers" fill="hsl(var(--secondary))" name="Customers" />
          <Bar dataKey="orders" fill="hsl(var(--accent))" name="Orders" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
