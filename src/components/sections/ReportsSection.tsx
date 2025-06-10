
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, BarChart3 } from "lucide-react";

interface ReportsSectionProps {
  dateRange: string;
  region: string;
  category: string;
}

export function ReportsSection({ dateRange, region, category }: ReportsSectionProps) {
  const reports = [
    {
      title: "Monthly Sales Report",
      description: "Comprehensive monthly sales analysis with trends",
      lastGenerated: "2 hours ago",
      icon: FileText
    },
    {
      title: "Product Performance Report",
      description: "Detailed product category and individual item analysis",
      lastGenerated: "1 day ago",
      icon: BarChart3
    },
    {
      title: "Regional Analysis Report",
      description: "Geographic performance breakdown and insights",
      lastGenerated: "3 days ago",
      icon: Calendar
    },
    {
      title: "Customer Insights Report",
      description: "Customer behavior and segmentation analysis",
      lastGenerated: "5 days ago",
      icon: FileText
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Reports & Analytics</h2>
        <p className="text-muted-foreground">
          Generate and download comprehensive business reports and insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <report.icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{report.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{report.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Last generated: {report.lastGenerated}
                </span>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Custom Report Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Generate custom reports based on your current filter selections:
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-muted rounded text-sm">Period: {dateRange}</span>
              <span className="px-2 py-1 bg-muted rounded text-sm">Region: {region}</span>
              <span className="px-2 py-1 bg-muted rounded text-sm">Category: {category}</span>
            </div>
            <Button className="w-full md:w-auto">
              <FileText className="h-4 w-4 mr-2" />
              Generate Custom Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
