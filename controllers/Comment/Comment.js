const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    comment: { type: String, required: true },
    createdTime: { type: Date, required: true },
    belongTo: { type: Schema.Types.ObjectId },
    user: { type: Schema.Types.ObjectId, ref: "User" }
})

CommentSchema.virtual("url")
    .get(function () {
        return `/c/${this._id}`;
    })

CommentSchema.virtual("createdTimeToString")
    .get(function () {
        return this.createdTime.toDateString()
    })

CommentSchema.set("toJSON", { getters: true })

module.exports = mongoose.model("Comment", CommentSchema)