
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

const Privacy = () => {
  const [privacyContent, setPrivacyContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Privacy Policy | Paradox Script';
    
    // Simulate content loading
    setTimeout(() => {
      setPrivacyContent(`
        <div class="p-4">
          <h1 class="text-2xl font-bold mb-4">Privacy Policy</h1>
          <p class="mb-4">Last updated: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 class="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p class="mb-4">We collect information you provide directly to us when you create an account, use our services, or communicate with us. This may include your name, email address, and usage data.</p>
          
          <h2 class="text-xl font-semibold mb-2">2. How We Use Information</h2>
          <p class="mb-4">We use the information we collect to provide, maintain, and improve our services, communicate with you, and for research and analytics purposes.</p>
          
          <h2 class="text-xl font-semibold mb-2">3. Information Sharing</h2>
          <p class="mb-4">We do not share your personal information with third parties except as described in this privacy policy or with your consent.</p>
          
          <h2 class="text-xl font-semibold mb-2">4. Data Security</h2>
          <p class="mb-4">We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.</p>
          
          <h2 class="text-xl font-semibold mb-2">5. Your Choices</h2>
          <p class="mb-4">You can access, update, or delete your account information at any time through your account settings.</p>
          
          <h2 class="text-xl font-semibold mb-2">6. Children's Privacy</h2>
          <p class="mb-4">Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
          
          <h2 class="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
          <p class="mb-4">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our platform.</p>
          
          <h2 class="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p class="mb-4">If you have any questions about our privacy practices, please contact us.</p>
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
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
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
                  dangerouslySetInnerHTML={{ __html: privacyContent || '' }}
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

export default Privacy;
