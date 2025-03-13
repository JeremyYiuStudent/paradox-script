
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubscriberManager from '@/components/SubscriberManager';
import { startServer } from '@/server';
import { useToast } from '@/components/ui/use-toast';

const AdminSubscribers = () => {
  const { toast } = useToast();
  const [isServerRunning, setIsServerRunning] = useState(false);

  useEffect(() => {
    // Start the server when the component mounts
    let server: any;
    
    try {
      server = startServer();
      setIsServerRunning(process.env.NODE_ENV === 'development');
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Server started successfully');
      } else {
        toast({
          title: "Server Notice",
          description: "Running in production mode. Server functionality is limited.",
          variant: "default",
        });
      }
    } catch (error) {
      console.error('Failed to start server:', error);
      toast({
        title: "Server Error",
        description: "Failed to start the server. Some features may not work.",
        variant: "destructive",
      });
    }
    
    // Clean up when component unmounts
    return () => {
      if (server) {
        server.close();
        if (process.env.NODE_ENV === 'development') {
          console.log('Server stopped');
        }
      }
    };
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto">
          {!isServerRunning && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
              <p className="font-bold">Note</p>
              <p>The server is running in static mode. Some features may not be available in this environment.</p>
            </div>
          )}
          <SubscriberManager />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminSubscribers;
