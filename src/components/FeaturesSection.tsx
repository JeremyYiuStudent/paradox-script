
import React from 'react';
import { Blocks, Code2, Sparkles, Lightbulb, Moon, Gamepad, BookText, Zap, Users, PencilRuler } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Blocks className="h-6 w-6 text-blue-600" />,
    title: "Modular Design",
    description: "Build your stories using modular components for flexibility."
  },
  {
    icon: <Code2 className="h-6 w-6 text-blue-600" />,
    title: "No Coding Required",
    description: "Create interactive narratives without any programming knowledge."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-blue-600" />,
    title: "Engaging Mechanics",
    description: "Incorporate game mechanics that enhance storytelling."
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-blue-600" />,
    title: "Creative Tools",
    description: "Access a suite of tools designed for creative storytelling."
  },
  {
    icon: <Gamepad className="h-6 w-6 text-blue-600" />,
    title: "Interactive Gameplay",
    description: "Engage players with interactive gameplay elements."
  },
  {
    icon: <BookText className="h-6 w-6 text-blue-600" />,
    title: "Rich Storytelling",
    description: "Craft rich narratives that captivate your audience."
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: "Fast Prototyping",
    description: "Quickly prototype your ideas and get feedback."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Community Support",
    description: "Join a community of creators for support and inspiration."
  },
  {
    icon: <PencilRuler className="h-6 w-6 text-blue-600" />,
    title: "User-Friendly Interface",
    description: "Navigate easily with our intuitive interface."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Discover the powerful features that make storytelling easy and fun.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
