const express = require('express');
const controller=require('../controllers/HelpController')
const router = express.Router();
//api/students/
router.get('/', controller.getAll);

router.get('/:helpId', controller.get)

router.post('/', controller.insert)

router.put('/:helpId', controller.update)

router.delete('/:helpId', controller.delete)

module.exports = router;