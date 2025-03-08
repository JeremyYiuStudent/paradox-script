
import React from 'react';
import { BookOpenText, Twitter, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <BookOpenText className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-mono text-xl font-bold tracking-tight">
                Paradox<span className="text-blue-600">Script</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Empowering writers to create interactive multiplayer narratives without code.
              Join our community and bring your stories to life.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Github className="h-5 w-5" />, label: "GitHub" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
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
              title: "Product",
              links: ["Features", "How It Works", "Pricing", "Use Cases", "Roadmap"]
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Blog", "Press", "Contact"]
            }
          ].map((category, i) => (
            <div key={i}>
              <h4 className="font-medium text-lg mb-4">{category.title}</h4>
              <ul className="space-y-3">
                {category.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href="#" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
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
            {["Terms", "Privacy", "Cookies", "FAQ"].map((item, i) => (
              <a 
                key={i}
                href="#" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
