const QuestionSchema = require('./Question')

const questionService = {

    getQuestions: () => {
        return QuestionSchema
            .find()
            .exec();
    },

    getQuestionsIds: () => {
        return QuestionSchema
            .find({}, "id")
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