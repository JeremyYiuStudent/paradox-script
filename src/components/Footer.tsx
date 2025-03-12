
import React from 'react';
import { Twitter, Instagram, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/dee94213-24b2-4618-af5b-6bc2c7f9b2f8.png" 
                alt="Paradox Script Logo" 
                className="h-12 mr-3"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Empowering writers to create interactive multiplayer narratives without code.
              Join our community and bring your stories to life.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter", url: "https://twitter.com" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram", url: "https://instagram.com" },
                { icon: <Github className="h-5 w-5" />, label: "GitHub", url: "https://github.com" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", url: "https://linkedin.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {[
            {
              title: "Company",
              links: [
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" }
              ]
            },
            {
              title: "Legal",
              links: [
                { name: "Terms", path: "/terms" },
                { name: "Privacy", path: "/privacy" },
                { name: "Cookies", path: "/cookies" },
                { name: "FAQ", path: "/faq" }
              ]
            }
          ].map((category, i) => (
            <div key={i}>
              <h4 className="font-medium text-lg mb-4">{category.title}</h4>
              <ul className="space-y-3">
                {category.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Paradox Script. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              { name: "Terms", path: "/terms" },
              { name: "Privacy", path: "/privacy" },
              { name: "Cookies", path: "/cookies" },
              { name: "FAQ", path: "/faq" }
            ].map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
