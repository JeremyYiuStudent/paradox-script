
// Import the API functions from api.ts
import { getSubscribersAPI, addSubscriberAPI, clearSubscribersAPI } from './api';

// Re-export the functions
export const getSubscribers = getSubscribersAPI;
export const addSubscriber = addSubscriberAPI;
export const clearSubscribers = clearSubscribersAPI;
