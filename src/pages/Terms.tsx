import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

const Terms = () => {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
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
        setHtmlContent(html);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading Terms of Use:', error);
        setLoading(false);
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
            
            <h2>To-be Added</h2>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
