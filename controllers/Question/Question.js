const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: { type: String, required: true },
    createdTime: { type: Date, required: true },
    answers: [
        { type: Schema.Types.ObjectId, ref: "Answer" }
    ],
    user: { type: Schema.Types.ObjectId, ref: "User" },
    comments: [
        { type: Schema.Types.ObjectId, ref: "Comment" }
    ]
})

QuestionSchema.virtual("url")
    .get(function () {
        return `/q/${this._id}`;
    })

QuestionSchema.virtual("numAnswers")
    .get(function() {
        return this.answers ? this.answers.length : 0
    })

QuestionSchema.virtual("numComments")
    .get(function() {
        return this.comments ? this.comments.length : 0
    })

QuestionSchema.virtual("createdTimeToString")
    .get(function() {
        return this.createdTime && this.createdTime.toDateString()
    })

QuestionSchema.set("toJSON", { getters: true });

module.exports = mongoose.model("Question", QuestionSchema);