const AnswerSchema = require('./Answer');

const answerService = {

    getAnswersByQuestion: (id) => {
        return AnswerSchema.find({
            question: id
        }).exec()
    },

    saveNewAnswer: (data) => {
        let savingAnswer = new AnswerSchema(data);
        return savingAnswer.save();
    }
}

module.exports = answerService