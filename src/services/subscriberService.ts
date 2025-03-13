
// API URL - in production, this would be an environment variable
const API_URL = 'http://localhost:3001/api/subscribers';

export interface Subscriber {
  email: string;
  subscribedAt: string;
}

// Get all subscribers
export const getSubscribers = async (): Promise<Subscriber[]> => {
  try {
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
    const response = await fetch(API_URL, {
      method: 'DELETE',
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error clearing subscribers:', error);
    return { success: false };
  }
};
