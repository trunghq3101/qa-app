const CommentSchema = require('./Comment')

const commentService = {
    
    saveNewComment: (data) => {
        let savingComment = new CommentSchema(data)
        return savingComment.save()
    },

    getComments: (belongToId) => {
        return CommentSchema.find({ belongTo: belongToId }).exec()
    },

    getComment: (id) => {
        return CommentSchema.findById(id).exec()
    }
}

module.exports = commentService