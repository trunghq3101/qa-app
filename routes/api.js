const express = require('express');
const router = express.Router();
const questionController = require('../controllers/Question/questionController');

router.get('/q/all', questionController.getQuestions);

router.post('/q/new', questionController.saveNewQuestion);

router.get('/q/:id', questionController.getQuestion);

module.exports = router;
