const { SchemaTypes } = require("mongoose")
const mongoose = require("./connection")

const { Schema, model } = mongoose

const todoSchema = new Schema({
    name: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
},{timestamps: true})

const Todo = model("Todo", todoSchema)

module.exports = Todo