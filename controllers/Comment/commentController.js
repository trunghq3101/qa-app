const commentService = require('./commentService')
const answerService = require('../Answer/answerService')
const questionService = require('../Question/questionService')

const commentController = {

    saveNewComment: async (req, res, next) => {
        try {
            let newComment = await commentService.saveNewComment(req.body)
            let updatedAnswer = await answerService.updateAnswer(newComment.belongTo, {
                $push: {
                    comments: newComment._id
                }
            })
            let updatedQuestion = await questionService.updateQuestion(newComment.belongTo, {
                $push: {
                    comments: newComment._id
                }
            })
            res.json({
                ok: true,
                result: newComment
            })
        } catch (error) {
            next(error)
        }
    },

    getComments: async (req, res, next) => {
        try {
            let comments = await commentService.getComments(req.params.id)
            res.json({
                ok: true,
                result: comments
            })
        } catch (error) {
            next(error)
        }
    },

    getComment: async (req, res, next) => {
        try {
            let comment = await commentService.getComment(req.params.id)
            res.json({
                ok: true,
                result: comment
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = commentController