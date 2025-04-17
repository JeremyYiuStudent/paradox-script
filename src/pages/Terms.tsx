
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

const Terms = () => {
  const [termsContent, setTermsContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Terms of Service | Paradox Script';
    
    // Simulate content loading
    setTimeout(() => {
      setTermsContent(`
        <div class="p-4">
          <h1 class="text-2xl font-bold mb-4">Terms of Service</h1>
          <p class="mb-4">Last updated: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 class="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p class="mb-4">By accessing or using Paradox Script, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
          
          <h2 class="text-xl font-semibold mb-2">2. Description of Service</h2>
          <p class="mb-4">Paradox Script provides an interactive storytelling platform that allows users to create, share, and experience branching narratives and interactive fiction.</p>
          
          <h2 class="text-xl font-semibold mb-2">3. User Accounts</h2>
          <p class="mb-4">Some features of Paradox Script may require user registration. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
          
          <h2 class="text-xl font-semibold mb-2">4. User Content</h2>
          <p class="mb-4">Users may submit content to the platform. You retain all rights to your content, but grant us a license to use, modify, and display that content in connection with our services.</p>
          
          <h2 class="text-xl font-semibold mb-2">5. Intellectual Property</h2>
          <p class="mb-4">The Paradox Script service and its original content, features, and functionality are owned by Paradox Script and are protected by international copyright, trademark, and other intellectual property laws.</p>
          
          <h2 class="text-xl font-semibold mb-2">6. Termination</h2>
          <p class="mb-4">We may terminate or suspend your account and access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of the service or us.</p>
          
          <h2 class="text-xl font-semibold mb-2">7. Changes to Terms</h2>
          <p class="mb-4">We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on our platform.</p>
          
          <h2 class="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p class="mb-4">If you have any questions about these Terms, please contact us.</p>
        </div>
      `);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            {loading ? (
              <div className="space-y-4 mt-6">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-24 w-full" />
              </div>
            ) : (
              <div className="mt-6 border rounded-lg overflow-hidden bg-card">
                <div 
                  className="p-6"
                  dangerouslySetInnerHTML={{ __html: termsContent || '' }}
                />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
