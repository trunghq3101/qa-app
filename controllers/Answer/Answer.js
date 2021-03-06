const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnswerSchema = new Schema({
    answer: { type: String, required: true },
    createdTime: { type: Date, required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    user: { type: Schema.Types.ObjectId, ref: "User" }
})

AnswerSchema.virtual("url")
    .get(function () {
        return `/a/${this._id}`;
    })

AnswerSchema.virtual("createdTimeToString")
    .get(function() {
        return this.createdTime.toDateString();
    })

AnswerSchema.set("toJSON", { getters: true });

module.exports = mongoose.model("Answer", AnswerSchema);