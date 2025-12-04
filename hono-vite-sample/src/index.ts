import { Hono } from 'hono';

const app = new Hono();

// Simple API endpoint returning 'Hello, World!'
app.get('/hello', (c) => {
  return c.text('Hello, World!');
});

// Root route to verify server is up
app.get('/', (c) => c.text('Hono server is running'));

export default app;