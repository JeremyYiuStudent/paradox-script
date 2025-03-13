
// API URL - in production, this would be an environment variable
const isDevelopment = import.meta.env.DEV;

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
        { email: 'example@example.com', subscribedAt: new Date().toISOString() },
        { email: 'demo@example.com', subscribedAt: new Date().toISOString() },
        { email: 'test@example.com', subscribedAt: new Date().toISOString() }
      ];
    }
    
    // In development, use the local API endpoint
    const response = await fetch('http://localhost:3001/api/subscribers');
    if (!response.ok) {
      throw new Error('Failed to fetch subscribers');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    // Return mock data if there's an error
    return [
      { email: 'example@example.com', subscribedAt: new Date().toISOString() }
    ];
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
    
    const response = await fetch('http://localhost:3001/api/subscribers', {
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
    
    const response = await fetch('http://localhost:3001/api/subscribers', {
      method: 'DELETE',
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error clearing subscribers:', error);
    return { success: false };
  }
};
