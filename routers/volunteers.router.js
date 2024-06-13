const express = require('express');
const controller = require('../controllers/VolunteerController')

const router = express.Router();
//api/students/
router.get('/', controller.getAll);

router.get('/:volunteerId', controller.get)

router.post('/', controller.insert)

router.put('/:volunteerId', controller.update)

router.delete('/:volunteerId', controller.delete)

module.exports = router ;