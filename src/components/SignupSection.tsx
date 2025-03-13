
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail, CheckCircle, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

// Create a type for our subscribers
interface Subscriber {
  email: string;
  subscribedAt: string;
}

const SignupSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  // Load existing subscribers from local storage on component mount
  useEffect(() => {
    const storedSubscribers = localStorage.getItem('newsletter_subscribers');
    if (storedSubscribers) {
      setSubscribers(JSON.parse(storedSubscribers));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    // Check if email is already subscribed
    if (subscribers.some(sub => sub.email === email)) {
      toast({
        title: "Already subscribed",
        description: "This email is already on our mailing list.",
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      try {
        // Create new subscriber object
        const newSubscriber: Subscriber = {
          email,
          subscribedAt: new Date().toISOString(),
        };
        
        // Add to subscribers list
        const updatedSubscribers = [...subscribers, newSubscriber];
        
        // Save to localStorage
        localStorage.setItem('newsletter_subscribers', JSON.stringify(updatedSubscribers));
        
        // Update state
        setSubscribers(updatedSubscribers);
        setIsSubmitting(false);
        setIsSubscribed(true);
        setEmail('');
        
        console.log('New subscriber:', newSubscriber);
        console.log('Total subscribers:', updatedSubscribers.length);
        
        toast({
          title: "Subscription successful!",
          description: "Thank you for joining our mailing list.",
          duration: 5000,
        });
      } catch (error) {
        console.error('Subscription error:', error);
        toast({
          title: "Subscription failed",
          description: "There was an error saving your subscription. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
        setIsSubmitting(false);
      }
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

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-3">Join Our Community</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">Connect With Fellow Creators</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated on new features and join our growing community of interactive storytellers.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {/* Email signup */}
          <div className="glass dark:glass-dark rounded-3xl p-8 md:p-10 shadow-xl flex-1">
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Newsletter Updates</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Get early access opportunities and creative tips for narrative game development.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
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

            {/* Display total subscriber count for demonstration */}
            {subscribers.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  <span className="font-medium">{subscribers.length}</span> subscriber{subscribers.length !== 1 ? 's' : ''} in our community
                </p>
              </div>
            )}
          </div>

          {/* Discord QR code */}
          <div className="glass dark:glass-dark rounded-3xl p-8 md:p-10 shadow-xl flex-1 flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-blue-600" />
                <h4 className="text-xl font-semibold">Join Our Discord</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with our community of creators, share ideas, and get help from experienced storytellers.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl mb-4 shadow-md">
                <img 
                  src="/lovable-uploads/cca55cc7-d550-412f-a671-1bb0a9de5615.png" 
                  alt="Discord Community QR Code" 
                  className="w-48 h-48 object-contain"
                />
              </div>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Scan this QR code with your mobile device to join our Discord server
              </p>
              <Button variant="outline" className="mt-4 group" onClick={() => window.open("https://discord.gg/Enz3yTGFZu", "_blank")}>
                Open Discord Invite
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
