const AnswerSchema = require('./Answer');
const questionController = require('../Question/questionController');

const answerController = {

    getAnswersByQuestion: (req, res, next) => {
        try {
            AnswerSchema.find({
                question: req.params.id
            }, (err, result) => {
                err ? next(err) : res.json({
                    ok: true,
                    result: result
                })
            })
        } catch (error) {
            next(error)
        }
    },

    saveNewAnswer: (req, res, next) => {
        try {
            let savingAnswer = new AnswerSchema({
                answer: req.body.answer,
                createdTime: req.body.createdTime,
                question: req.body.question,
                comments: req.body.comments,
                user: req.body.user
            })
            savingAnswer.save((err, result) => {
                err ? next(err) : res.json({
                    ok: true,
                    result: result
                })
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = answerController;