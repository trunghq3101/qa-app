const QuestionSchema = require('./Question')
const questionService = require('./questionService')

const questionController = {

    getQuestions: async (req, res, next) => {
        try {
            let questions = await questionService.getQuestions();
            res.json({
                ok: true,
                result: questions
            })
        } catch (error) {
            next(error)
        }
    },

    saveNewQuestion: (req, res, next) => {
        try {
            let savingQuestion = new QuestionSchema({
                question: req.body.question,
                createdTime: req.body.createdTime,
                answers: req.body.answers,
                user: req.body.user,
                comments: req.body.comments
            })
            savingQuestion.save((err, result) => {
                err ? next(err) : res.json({
                    ok: true,
                    result: result
                })
            })
        } catch (error) {
            next(error)
        }
    },

    getQuestion: (req, res, next) => {
        try {
            QuestionSchema.findById( req.params.id, (err, result) => {
                err ? next(err) : res.json({
                    ok: true,
                    result: result
                })
            })
        } catch (error) {
            next(error)
        }
    },

    updateQuestion: (req, res, next) => {
        try {
            questionService.updateQuestion(req.body.id, req.body.update)
                .then(result => res.json({
                    ok: true,
                    result: result
                }))
                .catch(err => next(err))
        } catch (error) {
            next(error)
        }
    }
}

module.exports = questionController;