
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';

interface Subscriber {
  email: string;
  subscribedAt: string;
}

const SubscriberManager = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Load subscribers from localStorage on component mount
  useEffect(() => {
    try {
      const storedData = localStorage.getItem('newsletter_subscribers');
      const parsedData = storedData ? JSON.parse(storedData) : [];
      setSubscribers(parsedData);
    } catch (error) {
      console.error('Error loading subscribers:', error);
      toast({
        title: 'Error',
        description: 'Failed to load subscriber data',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  // Export subscribers to CSV file
  const exportToCSV = () => {
    try {
      // Create CSV content
      const csvContent = [
        ['Email', 'Subscribed At'],
        ...subscribers.map(sub => [sub.email, new Date(sub.subscribedAt).toLocaleString()])
      ].map(row => row.join(',')).join('\n');
      
      // Create a blob and download link
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      // Set up and trigger download
      link.setAttribute('href', url);
      link.setAttribute('download', `paradox_script_subscribers_${new Date().toISOString().slice(0,10)}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: 'Export Successful',
        description: `Exported ${subscribers.length} subscribers to CSV`,
      });
    } catch (error) {
      console.error('Error exporting subscribers:', error);
      toast({
        title: 'Export Failed',
        description: 'Could not export subscribers to CSV',
        variant: 'destructive',
      });
    }
  };

  // Clear all subscribers (for testing/development)
  const clearSubscribers = () => {
    if (window.confirm('Are you sure you want to delete all subscribers? This cannot be undone.')) {
      localStorage.removeItem('newsletter_subscribers');
      setSubscribers([]);
      toast({
        title: 'Subscribers Cleared',
        description: 'All subscriber data has been removed',
      });
    }
  };

  // Format date string
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Newsletter Subscribers</h1>
        <div className="flex gap-4">
          <Button onClick={exportToCSV} disabled={subscribers.length === 0 || isLoading}>
            Export to CSV
          </Button>
          <Button 
            variant="destructive" 
            onClick={clearSubscribers} 
            disabled={subscribers.length === 0 || isLoading}
          >
            Clear All
          </Button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="flex gap-2">
            <div className="animate-pulse h-3 w-3 rounded-full bg-blue-600"></div>
            <div className="animate-pulse h-3 w-3 rounded-full bg-blue-600 animation-delay-200"></div>
            <div className="animate-pulse h-3 w-3 rounded-full bg-blue-600 animation-delay-400"></div>
          </div>
        </div>
      ) : subscribers.length === 0 ? (
        <div className="text-center p-12 border border-dashed rounded-lg">
          <p className="text-gray-500 dark:text-gray-400">No subscribers yet</p>
        </div>
      ) : (
        <>
          <p className="mb-4">Total Subscribers: {subscribers.length}</p>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60%]">Email</TableHead>
                  <TableHead className="w-[40%]">Subscribed At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscribers.map((subscriber, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{subscriber.email}</TableCell>
                    <TableCell>{formatDate(subscriber.subscribedAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
};

export default SubscriberManager;
