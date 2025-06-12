
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReportsSectionProps {
  dateRange: string;
  region: string;
  category: string;
}

export function ReportsSection({ dateRange, region, category }: ReportsSectionProps) {
  const { toast } = useToast();

  const reports = [
    {
      title: "Monthly Sales Report",
      description: "Comprehensive monthly sales analysis with trends",
      lastGenerated: "2 hours ago",
      icon: FileText,
      filename: "monthly_sales_report.pdf"
    },
    {
      title: "Product Performance Report", 
      description: "Detailed product category and individual item analysis",
      lastGenerated: "1 day ago",
      icon: BarChart3,
      filename: "product_performance_report.pdf"
    },
    {
      title: "Regional Analysis Report",
      description: "Geographic performance breakdown and insights",
      lastGenerated: "3 days ago", 
      icon: Calendar,
      filename: "regional_analysis_report.pdf"
    },
    {
      title: "Customer Insights Report",
      description: "Customer behavior and segmentation analysis",
      lastGenerated: "5 days ago",
      icon: FileText,
      filename: "customer_insights_report.pdf"
    }
  ];

  const handleDownload = (reportTitle: string, filename: string) => {
    // Simulate download functionality
    const link = document.createElement('a');
    link.href = '#'; // In a real app, this would be the actual file URL
    link.download = filename;
    
    // Create mock report content
    const reportData = generateReportData(reportTitle);
    const blob = new Blob([reportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    link.href = url;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Download Started",
      description: `${reportTitle} is being downloaded`,
      duration: 3000,
    });
  };

  const generateReportData = (reportTitle: string) => {
    const currentDate = new Date().toLocaleDateString();
    return `
${reportTitle}
Generated on: ${currentDate}
Period: ${dateRange}
Region: ${region === 'all' ? 'All Regions' : region}
Category: ${category === 'all' ? 'All Categories' : category}

EXECUTIVE SUMMARY
================
This report provides comprehensive analysis of sales performance based on the selected filters.

KEY METRICS
===========
- Total Revenue: ₹2,45,67,890
- Total Orders: 15,280
- Average Order Value: ₹1,608
- Customer Growth: +12%

INSIGHTS
========
- Electronics category shows strongest growth at 15%
- North region leading in revenue generation
- Customer retention improved by 8% this quarter

RECOMMENDATIONS
===============
1. Increase inventory for top-performing products
2. Focus marketing efforts on underperforming regions
3. Implement customer loyalty programs

For detailed analysis and charts, please refer to the dashboard.
    `;
  };

  const handleCustomReportGeneration = () => {
    const customReportData = generateReportData("Custom Report");
    const blob = new Blob([customReportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `custom_report_${dateRange}_${region}_${category}.txt`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Custom Report Generated",
      description: "Your custom report has been generated and downloaded",
      duration: 3000,
    });
  };

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
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDownload(report.title, report.filename)}
                >
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
            <Button 
              className="w-full md:w-auto"
              onClick={handleCustomReportGeneration}
            >
              <FileText className="h-4 w-4 mr-2" />
              Generate Custom Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
