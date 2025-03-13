
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubscriberManager from '@/components/SubscriberManager';
import { startServer } from '@/server';

const AdminSubscribers = () => {
  useEffect(() => {
    // Start the server when the component mounts
    let server: any;
    
    try {
      server = startServer();
      console.log('Server started successfully');
    } catch (error) {
      console.error('Failed to start server:', error);
    }
    
    // Clean up when component unmounts
    return () => {
      if (server) {
        server.close();
        console.log('Server stopped');
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto">
          <SubscriberManager />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminSubscribers;
