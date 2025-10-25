const express = require('express');
const router = express.Router();
const { db } = require('../../src/lib/supabase.cjs');

// GET /api/schools - Get all schools
router.get('/', async (req, res) => {
  try {
    const schools = await db.schools.getAll();
    res.json({
      success: true,
      data: schools
    });
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch schools'
    });
  }
});

// GET /api/schools/:id - Get school by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const school = await db.schools.getById(id);
    res.json({
      success: true,
      data: school
    });
  } catch (error) {
    console.error('Error fetching school:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch school'
    });
  }
});

// POST /api/schools - Create new school
router.post('/', async (req, res) => {
  try {
    const schoolData = req.body;
    
    // Validate required fields
    if (!schoolData.name || !schoolData.state) {
      return res.status(400).json({
        success: false,
        error: 'Name and state are required'
      });
    }

    const school = await db.schools.create(schoolData);
    res.status(201).json({
      success: true,
      data: school
    });
  } catch (error) {
    console.error('Error creating school:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create school'
    });
  }
});

// PUT /api/schools/:id - Update school
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const school = await db.schools.update(id, updates);
    res.json({
      success: true,
      data: school
    });
  } catch (error) {
    console.error('Error updating school:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update school'
    });
  }
});

module.exports = router;
