const express = require('express')
const router = express.Router()
const questionController = require('../controllers/Question/questionController')
const answerController = require('../controllers/Answer/answerController')
const commentController = require('../controllers/Comment/commentController')

router.get('/q/all', questionController.getQuestions);

router.get('/q/all_id', questionController.getQuestionsIds)

router.post('/q/new', questionController.saveNewQuestion);

router.post('/q/update', questionController.updateQuestion);

router.get('/q/:id', questionController.getQuestion);

router.get('/a/all/q/:id', answerController.getAnswersByQuestion);

router.post('/a/new', answerController.saveNewAnswer);

router.get('/a/:id', answerController.getAnswer)

router.post('/c/new', commentController.saveNewComment)

router.get('/c/:id', commentController.getComment)

router.get('/c/all/:id', commentController.getComments)

module.exports = router;
