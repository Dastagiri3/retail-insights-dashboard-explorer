
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ProductChartProps {
  dateRange: string;
  region: string;
}

export function ProductChart({ dateRange, region }: ProductChartProps) {
  const data = [
    { name: 'Electronics', value: 1245000, percentage: 35 },
    { name: 'Clothing', value: 892000, percentage: 25 },
    { name: 'Home & Garden', value: 678000, percentage: 19 },
    { name: 'Sports', value: 456000, percentage: 13 },
    { name: 'Books', value: 289000, percentage: 8 }
  ];

  const COLORS = [
    'hsl(var(--primary))',
    'hsl(var(--secondary))',
    'hsl(var(--accent))',
    'hsl(var(--muted))',
    'hsl(var(--destructive))'
  ];

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percentage }) => `${name} ${percentage}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px'
            }}
            formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
