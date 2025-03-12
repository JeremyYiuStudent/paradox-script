
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    document.title = 'FAQ | Paradox Script';
  }, []);

  const faqs = [
    {
      question: "What is Paradox Script?",
      answer: "Paradox Script is a platform that allows writers to create interactive multiplayer narrative games without coding. Our tools handle all the technical aspects, so you can focus on crafting engaging stories that players can experience together."
    },
    {
      question: "Do I need coding knowledge to use Paradox Script?",
      answer: "Not at all! Paradox Script is designed specifically for writers and storytellers with no coding experience. Our visual tools and templates make it easy to create interactive narratives without writing a single line of code."
    },
    {
      question: "How does the multiplayer functionality work?",
      answer: "Paradox Script handles all the complexities of multiplayer functionality behind the scenes. You can design roles for different players, create shared narrative spaces, and craft story elements that respond to collective player choices."
    },
    {
      question: "What kind of stories can I create?",
      answer: "You can create a wide range of interactive narratives, from mystery adventures and fantasy quests to sci-fi explorations and educational experiences. Our platform is flexible enough to accommodate various genres and storytelling approaches."
    },
    {
      question: "How much does Paradox Script cost?",
      answer: "We offer a range of pricing plans to suit different needs. We have a free tier for casual creators, as well as premium tiers with additional features for more serious storytellers. Visit our Pricing page for detailed information."
    },
    {
      question: "Can I monetize the stories I create?",
      answer: "Yes! You retain ownership of your creative content. Our platform includes options for monetizing your stories through direct sales, subscriptions, or in-story purchases, allowing you to earn income from your creative work."
    },
    {
      question: "Is there a community of creators I can connect with?",
      answer: "Absolutely! Paradox Script has a thriving community of writers, storytellers, and game designers. You can share ideas, get feedback on your projects, and collaborate with others through our community forums and events."
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up for an account, explore our tutorials and templates, and start creating! Our onboarding process will guide you through the basics, and our documentation provides comprehensive information as you advance."
    },
    {
      question: "What platforms can my stories be played on?",
      answer: "Stories created with Paradox Script can be played on web browsers, making them accessible on computers, tablets, and mobile devices without requiring any downloads or installations."
    },
    {
      question: "Do you offer support if I get stuck?",
      answer: "Yes, we provide several levels of support. Our documentation and tutorials cover most common questions, our community forums are a great place to get peer assistance, and our support team is available to help with technical issues."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Find answers to common questions about Paradox Script and interactive storytelling.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Still have questions?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you couldn't find the answer you were looking for, please feel free to contact our support team.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
