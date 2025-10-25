const request = require('supertest');
const app = require('../server');

describe('Race4Success API', () => {
  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const res = await request(app)
        .get('/api/health')
        .expect(200);
      
      expect(res.body).toHaveProperty('status', 'OK');
      expect(res.body).toHaveProperty('timestamp');
      expect(res.body).toHaveProperty('uptime');
    });
  });

  describe('GET /', () => {
    it('should serve the main page', async () => {
      const res = await request(app)
        .get('/')
        .expect(200);
      
      expect(res.text).toContain('Race4Success');
    });
  });

  describe('API Routes', () => {
    it('should handle auth routes', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .expect(200);
      
      expect(res.body).toHaveProperty('message');
      expect(res.body).toHaveProperty('status', 'success');
    });

    it('should handle 404 for unknown routes', async () => {
      const res = await request(app)
        .get('/api/unknown')
        .expect(404);
      
      expect(res.body).toHaveProperty('error');
    });
  });
});
