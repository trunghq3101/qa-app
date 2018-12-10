const QuestionSchema = require('./Question')

const questionService = {

    getQuestions: () => {
        return QuestionSchema
            .find()
            .limit(10)
            .exec();
    },

    getQuestionsIds: () => {
        return QuestionSchema
            .find({}, "id")
            .limit(10)
            .exec();
    },

    getQuestion: (id) => {
        return QuestionSchema
            .findById(id)
            .exec();
    },

    saveNewQuestion: (data) => {
        let savingQuestion = new QuestionSchema(data);
        return savingQuestion.save();
    },

    updateQuestion: (id, update) => {
        return QuestionSchema.findByIdAndUpdate(id, update, { new: true }).exec();
    }
}

module.exports = questionService