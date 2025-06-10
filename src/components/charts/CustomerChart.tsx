
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CustomerChartProps {
  dateRange: string;
  region: string;
  category: string;
}

export function CustomerChart({ dateRange, region, category }: CustomerChartProps) {
  const data = [
    { month: 'Jan', newCustomers: 234, returningCustomers: 567 },
    { month: 'Feb', newCustomers: 289, returningCustomers: 623 },
    { month: 'Mar', newCustomers: 312, returningCustomers: 678 },
    { month: 'Apr', newCustomers: 356, returningCustomers: 734 },
    { month: 'May', newCustomers: 298, returningCustomers: 689 },
    { month: 'Jun', newCustomers: 378, returningCustomers: 756 },
    { month: 'Jul', newCustomers: 423, returningCustomers: 834 },
    { month: 'Aug', newCustomers: 389, returningCustomers: 798 },
    { month: 'Sep', newCustomers: 445, returningCustomers: 867 },
    { month: 'Oct', newCustomers: 478, returningCustomers: 923 },
    { month: 'Nov', newCustomers: 523, returningCustomers: 978 },
    { month: 'Dec', newCustomers: 567, returningCustomers: 1034 }
  ];

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="month" 
            className="text-muted-foreground"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
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
              Number(value).toLocaleString(),
              name === 'newCustomers' ? 'New Customers' : 'Returning Customers'
            ]}
          />
          <Area 
            type="monotone" 
            dataKey="returningCustomers" 
            stackId="1"
            stroke="hsl(var(--primary))" 
            fill="hsl(var(--primary))"
            fillOpacity={0.6}
          />
          <Area 
            type="monotone" 
            dataKey="newCustomers" 
            stackId="1"
            stroke="hsl(var(--secondary))" 
            fill="hsl(var(--secondary))"
            fillOpacity={0.8}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
