
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface DashboardHeaderProps {
  selectedDateRange: string;
  setSelectedDateRange: (value: string) => void;
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

export function DashboardHeader({
  selectedDateRange,
  setSelectedDateRange,
  selectedRegion,
  setSelectedRegion,
  selectedCategory,
  setSelectedCategory,
}: DashboardHeaderProps) {
  const { toast } = useToast();

  const handleFilterChange = (type: string, value: string) => {
    console.log(`Filter changed: ${type} = ${value}`);
    
    switch (type) {
      case 'dateRange':
        setSelectedDateRange(value);
        toast({
          title: "Date Range Updated",
          description: `Showing ${value} data`,
          duration: 2000,
        });
        break;
      case 'region':
        setSelectedRegion(value);
        toast({
          title: "Region Filter Updated", 
          description: value === 'all' ? 'Showing all regions' : `Filtered to ${value} region`,
          duration: 2000,
        });
        break;
      case 'category':
        setSelectedCategory(value);
        toast({
          title: "Category Filter Updated",
          description: value === 'all' ? 'Showing all categories' : `Filtered to ${value} category`,
          duration: 2000,
        });
        break;
    }
  };

  return (
    <Card className="m-6 mb-0 p-4 bg-card border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Sales Performance Dashboard</h1>
            <p className="text-muted-foreground">Monitor your retail business metrics and insights</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Select value={selectedDateRange} onValueChange={(value) => handleFilterChange('dateRange', value)}>
            <SelectTrigger className="w-32 transition-all hover:bg-accent">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedRegion} onValueChange={(value) => handleFilterChange('region', value)}>
            <SelectTrigger className="w-32 transition-all hover:bg-accent">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="north">North</SelectItem>
              <SelectItem value="south">South</SelectItem>
              <SelectItem value="east">East</SelectItem>
              <SelectItem value="west">West</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={(value) => handleFilterChange('category', value)}>
            <SelectTrigger className="w-32 transition-all hover:bg-accent">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="home">Home & Garden</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
}
