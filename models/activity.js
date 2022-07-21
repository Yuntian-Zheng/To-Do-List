const mongoose = require("./connection")

const { Schema, model } = mongoose

const activitySchema = new Schema({
    activity: String,
    completed: {
        type: Boolean,
        default: false
    },
    listId: {
        type: Schema.Types.ObjectId,
        ref: "Todo"
    }
},{timestamps: true})

const Activity = model("Activity", activitySchema)

module.exports = Activity