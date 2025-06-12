
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ProductChartProps {
  dateRange: string;
  region: string;
}

export function ProductChart({ dateRange, region }: ProductChartProps) {
  const data = [
    { name: 'Electronics', value: 1245000, percentage: 35, color: '#3B82F6' },
    { name: 'Clothing', value: 892000, percentage: 25, color: '#10B981' },
    { name: 'Home & Garden', value: 678000, percentage: 19, color: '#F59E0B' },
    { name: 'Sports', value: 456000, percentage: 13, color: '#EF4444' },
    { name: 'Books', value: 289000, percentage: 8, color: '#8B5CF6' }
  ];

  const COLORS = [
    '#3B82F6', // Blue for Electronics
    '#10B981', // Green for Clothing  
    '#F59E0B', // Orange for Home & Garden
    '#EF4444', // Red for Sports
    '#8B5CF6'  // Purple for Books
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
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px'
            }}
            formatter={(value) => [`₹${Number(value).toLocaleString()}`, 'Revenue']}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
