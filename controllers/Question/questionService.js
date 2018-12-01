const QuestionSchema = require('./Question')

const questionService = {

    getQuestions: () => {
        return QuestionSchema.find().exec();
    }
}

module.exports = questionService