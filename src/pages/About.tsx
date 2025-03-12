
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Paradox Script';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About Paradox Script</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">Paradox Script was founded with a simple mission: to empower writers to create interactive multiplayer narratives without requiring coding skills.</p>
              
              <p>Our platform bridges the gap between traditional storytelling and modern interactive experiences. We believe that the future of storytelling is interactive, collaborative, and accessible to creators of all technical backgrounds.</p>
              
              <h2>Our Story</h2>
              
              <p>Founded in 2023 by a team of writers, game designers, and developers, Paradox Script emerged from a shared frustration: creating interactive narrative games required either extensive coding knowledge or significant compromise on creative vision.</p>
              
              <p>We set out to build a platform that puts storytelling first, handling all the technical complexities behind the scenes while giving writers the tools they need to craft rich, branching narratives that players can experience together.</p>
              
              <h2>Our Vision</h2>
              
              <p>We envision a world where interactive storytelling is as accessible to create as it is to consume. Where writers can focus on crafting compelling narratives and engaging characters rather than wrestling with code.</p>
              
              <p>Paradox Script is more than just a tool—it's a community of creators pushing the boundaries of what interactive storytelling can be.</p>
              
              <div className="my-8 flex justify-center">
                <Button className="flex items-center gap-2" size="lg">
                  Join Our Community <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
