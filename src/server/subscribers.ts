
// Simple in-memory store for subscribers
// In a production environment, this would be replaced with a database
let subscribers: { email: string; subscribedAt: string }[] = [];

export const getSubscribers = () => {
  return subscribers;
};

export const addSubscriber = (email: string) => {
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

export const clearSubscribers = () => {
  subscribers = [];
  return { success: true };
};
