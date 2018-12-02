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
    },

    getAnswer: (id) => {
        return AnswerSchema.findById(id).exec();
    },

    updateAnswer: (id, update) => {
        return AnswerSchema.findByIdAndUpdate(id, update, { new: true }).exec();
    }
}

module.exports = answerService