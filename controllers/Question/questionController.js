const QuestionSchema = require('./Question')

const questionController = {

    getQuestions: (req, res, next) => {
        try {
            QuestionSchema.find((err, result) => {
                err ? next(err) : res.json({
                    ok: true,
                    result: result
                })
            })
        } catch (error) {
            next(error);
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
                if (err) { next(err) } else {
                    res.json(result);
                }
            })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = questionController;