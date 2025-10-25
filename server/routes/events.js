const express = require('express');
const router = express.Router();
const { db } = require('../../src/lib/supabase.cjs');

// GET /api/events - Get all events
router.get('/', async (req, res) => {
  try {
    const events = await db.events.getAll();
    res.json({
      success: true,
      data: events
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch events'
    });
  }
});

// GET /api/events/upcoming - Get upcoming events
router.get('/upcoming', async (req, res) => {
  try {
    const events = await db.events.getUpcoming();
    res.json({
      success: true,
      data: events
    });
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch upcoming events'
    });
  }
});

// POST /api/events - Create new event
router.post('/', async (req, res) => {
  try {
    const eventData = req.body;
    
    // Validate required fields
    if (!eventData.name || !eventData.event_date) {
      return res.status(400).json({
        success: false,
        error: 'Name and event_date are required'
      });
    }

    const event = await db.events.create(eventData);
    res.status(201).json({
      success: true,
      data: event
    });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create event'
    });
  }
});

module.exports = router;
