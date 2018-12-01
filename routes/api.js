const express = require('express');
const router = express.Router();
const questionController = require('../controllers/Question/questionController');
const answerController = require('../controllers/Answer/answerController');

router.get('/q/all', questionController.getQuestions);

router.post('/q/new', questionController.saveNewQuestion);

router.post('/q/update', questionController.updateQuestion);

router.get('/q/:id', questionController.getQuestion);

router.get('/a/all/q/:id', answerController.getAnswersByQuestion);

router.post('/a/new', answerController.saveNewAnswer);

module.exports = router;
