
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubscriberManager from '@/components/SubscriberManager';
import { startServer } from '@/server';
import { useToast } from '@/components/ui/use-toast';

const AdminSubscribers = () => {
  const { toast } = useToast();
  const [isServerRunning, setIsServerRunning] = useState(false);
  const isDevelopment = import.meta.env.DEV;

  useEffect(() => {
    // Only start the server when in development mode
    let server: any;
    
    try {
      server = startServer();
      setIsServerRunning(isDevelopment);
      
      if (isDevelopment) {
        console.log('Server started successfully in development mode');
      } else {
        console.log('Running in production mode with mock data');
        toast({
          title: "Server Notice",
          description: "Running in production mode. Using mock data.",
          variant: "default",
        });
      }
    } catch (error) {
      console.error('Failed to start server:', error);
      toast({
        title: "Server Error",
        description: "Failed to initialize. Using fallback data.",
        variant: "destructive",
      });
    }
    
    // Clean up when component unmounts
    return () => {
      if (server) {
        server.close();
        if (isDevelopment) {
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
          {!isDevelopment && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
              <p className="font-bold">Note</p>
              <p>Running in production mode with mock data. For full functionality, run in development environment.</p>
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
