import { Hono } from 'hono';

const app = new Hono();

// Simple API endpoint
app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' });
});

// Optional root route to verify server is up
app.get('/', (c) => c.text('Hono server is running'));

const port = 3000;
app.listen({ port });
console.log(`Hono server listening on http://localhost:${port}`);