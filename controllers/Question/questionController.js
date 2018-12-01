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

    saveNewQuestion: async (req, res, next) => {
        try {
            let newQuestion = await questionService.saveNewQuestion(req.body);
            res.json({
                ok: true,
                result: newQuestion
            })
        } catch (error) {
            next(error)
        }
    },

    getQuestion: async (req, res, next) => {
        try {
            let question = await questionService.getQuestion(req.params.id);
            res.json({
                ok: true,
                result: question
            })
        } catch (error) {
            next(error)
        }
    },

    updateQuestion: async (req, res, next) => {
        try {
            let updatedQuestion = await questionService.updateQuestion(req.body.id, req.body.update)
            res.json({
                ok: true,
                result: updatedQuestion
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = questionController;