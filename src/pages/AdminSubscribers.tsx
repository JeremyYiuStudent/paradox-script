
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubscriberManager from '@/components/SubscriberManager';

const AdminSubscribers = () => {
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
