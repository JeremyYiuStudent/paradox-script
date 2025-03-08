
import React, { useState } from 'react';
import { Motion, Pen, Coins, Globe, Code, Users, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureCard = ({ icon, title, description, isActive, onClick }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <div 
    className={cn(
      "group relative p-6 rounded-2xl transition-all duration-300 ease-in-out cursor-pointer overflow-hidden",
      isActive 
        ? "bg-blue-50 dark:bg-blue-900/20 shadow-sm" 
        : "hover:bg-gray-50 dark:hover:bg-gray-800/20"
    )}
    onClick={onClick}
  >
    <div className="relative z-10">
      <div className={cn(
        "p-3 inline-flex items-center justify-center rounded-xl mb-4 transition-all",
        isActive 
          ? "bg-blue-100 text-blue-600 dark:bg-blue-700/30 dark:text-blue-400" 
          : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
      )}>
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>

    {isActive && (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-900/20 dark:to-blue-800/5 z-0" />
    )}
  </div>
);

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const features = [
    {
      icon: <Pen className="h-5 w-5" />,
      title: "Focus on Writing",
      description: "Create compelling narratives without worrying about code or game mechanics."
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Pre-Built Game Loops",
      description: "Use our ready-made gameplay elements and mechanics to bring your stories to life."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Multiplayer Ready",
      description: "Create interactive experiences that connect players from around the world."
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Publish Quickly",
      description: "Move from concept to published experience in hours, not months."
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Global Audience",
      description: "Share your creations with players worldwide through our platform."
    },
    {
      icon: <Coins className="h-5 w-5" />,
      title: "Monetize Your Work",
      description: "Earn from your creative writing through various revenue streams."
    }
  ];

  // Images corresponding to each feature
  const featureImages = [
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200"
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-3">Features</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">Create Interactive Worlds Effortlessly</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our platform provides everything you need to craft immersive multiplayer narratives without the technical hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Feature image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800 aspect-w-4 aspect-h-3">
              <div className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                !isImgLoaded && "image-loading"
              )}>
                <img
                  src={featureImages[activeFeature]}
                  alt={features[activeFeature].title}
                  className={cn(
                    "w-full h-full object-cover transition-opacity duration-500",
                    isImgLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setIsImgLoaded(true)}
                />
              </div>
              
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Feature cards */}
          <div className="lg:col-span-7 order-1 lg:order-2 grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isActive={activeFeature === index}
                onClick={() => {
                  setIsImgLoaded(false);
                  setActiveFeature(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
