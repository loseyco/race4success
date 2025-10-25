const express = require('express');
const router = express.Router();
const { db } = require('../../src/lib/supabase.cjs');

// GET /api/programs - Get all programs
router.get('/', async (req, res) => {
  try {
    const programs = await db.programs.getAll();
    res.json({
      success: true,
      data: programs
    });
  } catch (error) {
    console.error('Error fetching programs:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch programs'
    });
  }
});

// GET /api/programs/school/:schoolId - Get programs by school
router.get('/school/:schoolId', async (req, res) => {
  try {
    const { schoolId } = req.params;
    const programs = await db.programs.getBySchoolId(schoolId);
    res.json({
      success: true,
      data: programs
    });
  } catch (error) {
    console.error('Error fetching programs by school:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch programs'
    });
  }
});

// POST /api/programs - Create new program
router.post('/', async (req, res) => {
  try {
    const programData = req.body;
    
    // Validate required fields
    if (!programData.name || !programData.school_id) {
      return res.status(400).json({
        success: false,
        error: 'Name and school_id are required'
      });
    }

    const program = await db.programs.create(programData);
    res.status(201).json({
      success: true,
      data: program
    });
  } catch (error) {
    console.error('Error creating program:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create program'
    });
  }
});

// PUT /api/programs/:id - Update program
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const program = await db.programs.update(id, updates);
    res.json({
      success: true,
      data: program
    });
  } catch (error) {
    console.error('Error updating program:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update program'
    });
  }
});

module.exports = router;
