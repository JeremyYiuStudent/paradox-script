
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

const Terms = () => {
  const [termsContent, setTermsContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Use the correct path to the HTML file
    fetch('/src/components/TermsOfUse.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        setTermsContent(html);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading Terms of Use content:', error);
        setError('Unable to load Terms of Use content. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-5/6" />
              <Skeleton className="h-8 w-4/6" />
              <Skeleton className="h-[600px] w-full" />
            </div>
          ) : error ? (
            <div className="p-4 border border-red-300 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          ) : (
            <iframe 
              srcDoc={termsContent}
              className="w-full min-h-[800px] border-0"
              title="Terms of Service"
              sandbox="allow-same-origin allow-scripts"
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
