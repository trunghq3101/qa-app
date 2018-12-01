const express = require('express');
const router = express.Router();
const questionController = require('../controllers/Question/questionController');

router.get('/q/all', questionController.getQuestions);

router.post('/q/new', questionController.saveNewQuestion);

module.exports = router;
