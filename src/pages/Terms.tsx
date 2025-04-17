
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

const Terms = () => {
  const [termsContent, setTermsContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Terms of Service | Paradox Script';
    
    // Fetch the HTML content
    fetch('/src/components/TermsOfUse.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load Terms of Use');
        }
        return response.text();
      })
      .then(html => {
        setTermsContent(html);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading Terms of Use:', error);
        setLoading(false);
        // Set fallback content in case of error
        setTermsContent("<h2>Terms of Service</h2><p>Our terms of service are currently being updated. Please check back later.</p>");
      });
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
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <div className="mt-6">
                {termsContent ? (
                  <iframe 
                    srcDoc={termsContent}
                    title="Terms of Service"
                    className="w-full border-0 min-h-[800px]"
                    sandbox="allow-same-origin"
                  />
                ) : (
                  <p>Unable to load Terms of Service. Please try again later.</p>
                )}
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
