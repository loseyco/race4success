const express = require('express');
const router = express.Router();
const { db } = require('../../src/lib/supabase.cjs');

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message, phone, school, role } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required'
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

    const submissionData = {
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      phone: phone || null,
      school: school || null,
      role: role || null,
      created_at: new Date().toISOString()
    };

    const submission = await db.contactSubmissions.create(submissionData);
    
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: submission.id,
        submitted_at: submission.created_at
      }
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit contact form'
    });
  }
});

// GET /api/contact - Get all contact submissions (admin only)
router.get('/', async (req, res) => {
  try {
    const submissions = await db.contactSubmissions.getAll();
    res.json({
      success: true,
      data: submissions
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact submissions'
    });
  }
});

module.exports = router;
