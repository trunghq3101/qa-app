const AnswerSchema = require('./Answer');
const questionService = require('../Question/questionService');

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

    saveNewAnswer: async (req, res, next) => {
        try {
            let savingAnswer = new AnswerSchema({
                answer: req.body.answer,
                createdTime: req.body.createdTime,
                question: req.body.question,
                comments: req.body.comments,
                user: req.body.user
            })

            let newAnswer = await savingAnswer.save();
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
    }
}

module.exports = answerController;