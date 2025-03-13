
// Mock server implementation that works in both browser and Node.js environments
// Note: In browser environments, this will just provide mock functionality

// Simple in-memory store for subscribers (for development mode only)
let subscribers: { email: string; subscribedAt: string }[] = [];

// Create a mock server interface
export const startServer = () => {
  // Only provide actual server functionality in development
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log('Starting mock server in development mode');
    
    // Return a mock server object that can be "closed"
    return {
      close: () => console.log('Mock server closed')
    };
  }
  
  // Return a mock server object for production builds
  return {
    close: () => console.log('Mock server closed')
  };
};

// These functions are only used in development mode and will be replaced
// by the functions in subscriberService.ts in production
export const getSubscribersAPI = () => {
  return subscribers;
};

export const addSubscriberAPI = (email: string) => {
  const existingSubscriber = subscribers.find(sub => sub.email === email);
  
  if (existingSubscriber) {
    return { success: false, message: "Email already exists" };
  }
  
  const newSubscriber = {
    email,
    subscribedAt: new Date().toISOString()
  };
  
  subscribers.push(newSubscriber);
  return { success: true, subscriber: newSubscriber };
};

export const clearSubscribersAPI = () => {
  subscribers = [];
  return { success: true };
};
