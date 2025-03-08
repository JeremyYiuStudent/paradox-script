
import React from 'react';
import { BookOpenText, Code, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About content */}
          <div className="animate-slide-up">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-3">About Us</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">Empowering Storytellers in the Digital Age</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Paradox Script was born from a simple idea: everyone has stories to tell, but not everyone knows how to code. 
              We bridge that gap by making interactive storytelling accessible to writers of all backgrounds.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Our platform combines the art of narrative with the engagement of gameplay, 
              allowing writers to create immersive multiplayer experiences without technical barriers.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <BookOpenText className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Our Mission</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    To democratize interactive storytelling and empower writers to create engaging multiplayer narratives without code.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Code className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Our Approach</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    We handle the technical complexities so you can focus on what matters most: your creative vision.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Users className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Our Community</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Join a growing network of writers, players, and creators reshaping interactive entertainment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats & Testimonial */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "1,000+", label: "Writers" },
                { value: "50,000+", label: "Players" },
                { value: "750+", label: "Stories" },
                { value: "15+", label: "Countries" }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Testimonial */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative">
              <div className="absolute -top-4 left-8 text-blue-600 dark:text-blue-400 text-6xl">"</div>
              <div className="relative">
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  Paradox Script changed everything for me. As a writer with no coding experience, 
                  I never thought I'd be able to create interactive stories. Now I have a growing 
                  audience of players who love my narrative games.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">JD</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Jane Doe</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Fantasy Writer & Creator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
