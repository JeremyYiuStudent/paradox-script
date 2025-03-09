
import React, { useState } from 'react';
import { ArrowRight, BookOpenText, Gamepad, UsersRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-1/4 -z-10 transform-gpu blur-3xl">
          <div
            className="aspect-[1115/678] w-[69.69rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="absolute left-1/3 bottom-0 -z-10 transform-gpu blur-3xl">
          <div
            className="aspect-[1115/678] w-[69.69rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-20"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-medium tracking-wide mb-6">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
            Now accepting early access writers
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight sm:leading-tight lg:leading-tight mb-6">
            Write interactive stories
            <span className="block text-blue-600"> for the world to play</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
            Create immersive multiplayer narrative games without coding. 
            Just write your story, and we'll handle the rest.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { 
                icon: <BookOpenText className="h-5 w-5 text-blue-600" />, 
                title: "Just Write", 
                description: "Focus on your narrative while we handle the technical aspects" 
              },
              { 
                icon: <Gamepad className="h-5 w-5 text-blue-600" />, 
                title: "Ready Gameplay", 
                description: "Pre-built game loops and mechanics ready to use" 
              },
              { 
                icon: <UsersRound className="h-5 w-5 text-blue-600" />, 
                title: "Multiplayer", 
                description: "Connect players in your interactive world" 
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 relative animate-fade-in">
          <div className={cn(
            "relative overflow-hidden rounded-2xl shadow-xl",
            !isImgLoaded && "image-loading"
          )}>
            <div className="aspect-w-4 aspect-h-3 w-full">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
                alt="People collaborating on interactive stories"
                className={cn(
                  "object-cover w-full h-full transition-opacity duration-500",
                  isImgLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setIsImgLoaded(true)}
              />
            </div>
            
            {/* Overlay decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-4 right-4 glass px-3 py-2 rounded-full text-xs font-medium">
              Immersive Storytelling
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
