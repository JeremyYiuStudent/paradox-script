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
          
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-32 w-full" />
            </div>
          ) : htmlContent ? (
            <div className="w-full h-[800px] border border-gray-300 rounded-md">
              <iframe 
                srcDoc={htmlContent}
                className="w-full h-full"
                title="Terms of Service"
                sandbox="allow-same-origin"
              />
            </div>
          ) : (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2>1. Introduction</h2>
              <p>Welcome to Paradox Script. These Terms of Service govern your use of our website and services. By accessing or using Paradox Script, you agree to be bound by these Terms.</p>
              
              <h2>2. Definitions</h2>
              <p>"Service" refers to the Paradox Script platform, applications, and tools.</p>
              <p>"User," "you," and "your" refer to individuals who access or use the Service.</p>
              <p>"Content" refers to all text, images, audio, video, or other material submitted to or accessible through the Service.</p>
              
              <h2>3. Account Registration</h2>
              <p>You may be required to create an account to access certain features of our Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              
              <h2>4. User Content</h2>
              <p>You retain ownership of any intellectual property rights you hold in the Content you create using our Service. By submitting Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute it.</p>
              
              <h2>5. Acceptable Use</h2>
              <p>You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, or impair the Service. You will not attempt to gain unauthorized access to any part of the Service.</p>
              
              <h2>6. Termination</h2>
              <p>We reserve the right to suspend or terminate your access to the Service at any time for any reason without notice.</p>
              
              <h2>7. Disclaimer of Warranties</h2>
              <p>The Service is provided "as is" without warranties of any kind, either express or implied.</p>
              
              <h2>8. Limitation of Liability</h2>
              <p>In no event shall Paradox Script be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
              
              <h2>9. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>
              
              <h2>10. Governing Law</h2>
              <p>These Terms shall be governed by the laws of the State of California without regard to its conflict of law provisions.</p>
              
              <h2>11. Contact Information</h2>
              <p>For any questions about these Terms, please contact us at legal@paradoxscript.com.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
