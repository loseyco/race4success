const express = require('express');
const router = express.Router();
const { db } = require('../../src/lib/supabase.cjs');

// POST /api/newsletter - Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Validate email
    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email is required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    const subscription = await db.newsletterSubscriptions.create(email);
    
    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: {
        email: subscription.email,
        subscribed_at: subscription.created_at
      }
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    
    // Handle duplicate email error
    if (error.code === '23505') {
      return res.status(409).json({
        success: false,
        error: 'Email is already subscribed'
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to subscribe to newsletter'
    });
  }
});

// GET /api/newsletter - Get all newsletter subscriptions (admin only)
router.get('/', async (req, res) => {
  try {
    const subscriptions = await db.newsletterSubscriptions.getAll();
    res.json({
      success: true,
      data: subscriptions
    });
  } catch (error) {
    console.error('Error fetching newsletter subscriptions:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch newsletter subscriptions'
    });
  }
});

module.exports = router;
