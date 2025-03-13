
import { createServer } from 'http';
import { parse } from 'url';
import { getSubscribers, addSubscriber, clearSubscribers } from './subscribers';

// Simple middleware to parse JSON body
const parseJsonBody = async (req: any): Promise<any> => {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', (chunk: string) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        resolve({});
      }
    });
  });
};

// Create a simple HTTP server
const server = createServer(async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const { pathname } = parse(req.url || '', true);

  // API endpoint for subscribers
  if (pathname === '/api/subscribers') {
    // GET request to fetch all subscribers
    if (req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(getSubscribers()));
      return;
    }
    
    // POST request to add a new subscriber
    if (req.method === 'POST') {
      const body = await parseJsonBody(req);
      
      if (!body.email) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Email is required' }));
        return;
      }
      
      const result = addSubscriber(body.email);
      
      if (result.success) {
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      }
      return;
    }
    
    // DELETE request to clear all subscribers
    if (req.method === 'DELETE') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(clearSubscribers()));
      return;
    }
  }
  
  // Not found for any other endpoint
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

// Define the port - either from environment or default to 3001
const PORT = process.env.PORT || 3001;

export const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
  
  return server;
};
