const questionService = require('../Question/questionService');
const answerService = require('./answerService');

const answerController = {

    getAnswersByQuestion: async (req, res, next) => {
        try {
            let answers = answerService.getAnswersByQuestion(req.params.id);
            res.json({
                ok: true,
                result: answers
            })
        } catch (error) {
            next(error)
        }
    },

    saveNewAnswer: async (req, res, next) => {
        try {
            let newAnswer = await answerService.saveNewAnswer(req.body);
            await questionService.updateQuestion(req.body.question, {
                $push: {
                    answers: newAnswer._id
                }
            });
            res.json({
                ok: true,
                result: newAnswer
            })

        } catch (error) {
            next(error)
        }
    },

    getAnswer: async (req, res, next) => {
        try {
            let answer = await answerService.getAnswer(req.params.id)
            res.json({
                ok: true,
                result: answer
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = answerController;