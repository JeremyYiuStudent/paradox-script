
// API URL - in production, this would be an environment variable
const isDevelopment = import.meta.env.DEV;
const API_URL = isDevelopment 
  ? 'http://localhost:3001/api/subscribers'
  : '/api/subscribers'; // In production, this will be handled by Netlify functions or similar

export interface Subscriber {
  email: string;
  subscribedAt: string;
}

// Get all subscribers
export const getSubscribers = async (): Promise<Subscriber[]> => {
  try {
    if (!isDevelopment) {
      console.log('Running in production mode. Mock data will be used.');
      // Return mock data in production since we don't have a real server
      return [
        { email: 'example@example.com', subscribedAt: new Date().toISOString() }
      ];
    }
    
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch subscribers');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return [];
  }
};

// Add a new subscriber
export const addSubscriber = async (email: string): Promise<{ success: boolean; message?: string; subscriber?: Subscriber }> => {
  try {
    if (!isDevelopment) {
      console.log('Running in production mode. Subscriber will be mocked.');
      // Return success response with mock data
      return { 
        success: true, 
        subscriber: { email, subscribedAt: new Date().toISOString() } 
      };
    }
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error adding subscriber:', error);
    return { success: false, message: 'Failed to connect to server' };
  }
};

// Clear all subscribers
export const clearSubscribers = async (): Promise<{ success: boolean }> => {
  try {
    if (!isDevelopment) {
      console.log('Running in production mode. Clear operation mocked.');
      return { success: true };
    }
    
    const response = await fetch(API_URL, {
      method: 'DELETE',
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error clearing subscribers:', error);
    return { success: false };
  }
};
