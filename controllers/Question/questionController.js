const QuestionSchema = require('./Question')
const questionService = require('./questionService')

const questionController = {

    getQuestions: (req, res, next) => {
        try {
            questionService.getQuestions()
                .then(result => res.json({
                    ok: true,
                    result: result
                }))
                .catch(err => next(err));
            
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
            console.log(req.body.id);
            QuestionSchema.findByIdAndUpdate( req.body.id, req.body.update, (err, result) => {
                if (err) {
                    next(err);
                } else if (result) {
                    res.json({
                        ok: true,
                        result: result
                    })
                } else {
                    res.json({
                        ok: false,
                        result: "Can't update"
                    })
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = questionController;