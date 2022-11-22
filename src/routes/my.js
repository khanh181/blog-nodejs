const express = require('express');
const router = express.Router();

const myController = require('../app/controllers/MyController');

router.get('/stored/courses', myController.storedCourse);

module.exports = router;
