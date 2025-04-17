
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

const Privacy = () => {
  const [privacyContent, setPrivacyContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Privacy Policy | Paradox Script';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                At Paradox Script, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our interactive storytelling platform.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Information We Collect</h2>
              <p>
                We collect information that you voluntarily provide to us when you register for the platform,
                express interest in obtaining information about us or our products, or otherwise contact us.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services,
                to develop new features, and to protect our users and ourselves.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Sharing Your Information</h2>
              <p>
                We may share information with third parties that perform services for us or on our behalf,
                including payment processing, data analysis, email delivery, hosting services, and marketing assistance.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at privacy@paradoxscript.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
