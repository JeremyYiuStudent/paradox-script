
import { startServer } from './api';

// Start the server when this file is executed directly
if (require.main === module) {
  startServer();
}

export { startServer } from './api';
