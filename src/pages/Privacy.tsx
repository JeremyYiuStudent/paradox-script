
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
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
            
            <h2>1. Introduction</h2>
            <p>This Privacy Policy describes how Paradox Script collects, uses, and shares your personal information when you use our website and services.</p>
            
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>Account information (name, email, password)</li>
              <li>Profile information</li>
              <li>Content you create, upload, or share</li>
              <li>Communications with us</li>
            </ul>
            
            <h3>2.2 Information We Collect Automatically</h3>
            <p>When you use our Service, we may automatically collect:</p>
            <ul>
              <li>Log information (IP address, browser type, pages visited)</li>
              <li>Device information</li>
              <li>Usage information</li>
              <li>Cookies and similar technologies</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, investigate, and prevent security incidents</li>
            </ul>
            
            <h2>4. Sharing of Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers who perform services on our behalf</li>
              <li>Business partners with your consent</li>
              <li>In response to legal process or requests</li>
              <li>To protect rights, privacy, safety, or property</li>
              <li>In connection with a business transaction</li>
            </ul>
            
            <h2>5. Your Choices</h2>
            <p>You can manage your information and privacy preferences by:</p>
            <ul>
              <li>Updating your account information</li>
              <li>Adjusting your notification settings</li>
              <li>Opting out of marketing communications</li>
              <li>Managing cookies through your browser settings</li>
            </ul>
            
            <h2>6. Data Security</h2>
            <p>We implement reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.</p>
            
            <h2>7. International Data Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than your own, where privacy laws may be different.</p>
            
            <h2>8. Children's Privacy</h2>
            <p>Our Service is not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
            
            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
            
            <h2>10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at privacy@paradoxscript.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
