const QuestionSchema = require('./Question')

const questionService = {

    getQuestions: () => {
        return QuestionSchema.find().exec();
    },

    updateQuestion: (id, update) => {
        return QuestionSchema.findByIdAndUpdate(id, update).exec();
    }
}

module.exports = questionService