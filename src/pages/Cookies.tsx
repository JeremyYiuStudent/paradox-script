
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Cookies = () => {
  useEffect(() => {
    document.title = 'Cookie Policy | Paradox Script';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2>1. What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
            
            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for several purposes, including:</p>
            <ul>
              <li><strong>Essential cookies:</strong> These are necessary for the website to function properly.</li>
              <li><strong>Functionality cookies:</strong> These remember your preferences and settings.</li>
              <li><strong>Analytics cookies:</strong> These help us understand how visitors interact with our website.</li>
              <li><strong>Marketing cookies:</strong> These track your online activity to help deliver relevant advertising.</li>
            </ul>
            
            <h2>3. Types of Cookies We Use</h2>
            <h3>3.1 Session Cookies</h3>
            <p>These are temporary cookies that are deleted when you close your browser. They are used to remember your selections as you navigate the website.</p>
            
            <h3>3.2 Persistent Cookies</h3>
            <p>These remain on your device until they expire or you delete them. They are used to remember your preferences for future visits.</p>
            
            <h3>3.3 First-Party Cookies</h3>
            <p>These are set by our website directly.</p>
            
            <h3>3.4 Third-Party Cookies</h3>
            <p>These are set by third parties, such as analytics providers and advertising networks.</p>
            
            <h2>4. Managing Cookies</h2>
            <p>You can control and manage cookies in various ways:</p>
            <ul>
              <li>Through your browser settings</li>
              <li>By using cookie management tools</li>
              <li>By adjusting your preferences on our cookie consent banner</li>
            </ul>
            
            <p>Please note that blocking or deleting cookies may impact your experience on our website, as some features may not function properly.</p>
            
            <h2>5. Specific Cookies We Use</h2>
            <table className="min-w-full mt-4 mb-4">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Provider</th>
                  <th className="px-4 py-2 border">Purpose</th>
                  <th className="px-4 py-2 border">Expiry</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">session_id</td>
                  <td className="px-4 py-2 border">paradoxscript.com</td>
                  <td className="px-4 py-2 border">Maintains user session</td>
                  <td className="px-4 py-2 border">Session</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">_ga</td>
                  <td className="px-4 py-2 border">Google Analytics</td>
                  <td className="px-4 py-2 border">Analytics tracking</td>
                  <td className="px-4 py-2 border">2 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">_fbp</td>
                  <td className="px-4 py-2 border">Facebook</td>
                  <td className="px-4 py-2 border">Marketing/Advertising</td>
                  <td className="px-4 py-2 border">3 months</td>
                </tr>
              </tbody>
            </table>
            
            <h2>6. Changes to This Cookie Policy</h2>
            <p>We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
            
            <h2>7. Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at privacy@paradoxscript.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
