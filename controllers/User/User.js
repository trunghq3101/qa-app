const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String },
    userContents: [{ type: Schema.Types.ObjectId }],
    createdTime: { type: Date }
})

UserSchema.virtual("url")
    .get(function () {
        return `/u/${this._id}`;
    })

module.exports = mongoose.model("User", UserSchema);