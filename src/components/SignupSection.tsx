
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const SignupSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for joining our mailing list.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section id="signup" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 bottom-0 -z-10 transform-gpu blur-3xl">
          <div
            className="aspect-[1115/678] w-[69.69rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-10"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="glass dark:glass-dark rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-3">Stay Updated</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Creative Community</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Be the first to know about new features, early access opportunities, and creative tips for narrative game development.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting || isSubscribed}
                className={cn(
                  "bg-white/60 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700",
                  (isSubmitting || isSubscribed) && "opacity-70"
                )}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full group" 
              disabled={isSubmitting || isSubscribed}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-white"></span>
                  <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-white"></span>
                  <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-white"></span>
                </>
              ) : isSubscribed ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
              We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
