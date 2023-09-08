"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    username: { type: String, required: true },
    time: { type: String, required: true },
}, { collection: "author" });
CommentSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `${this._id}`;
});
module.exports = mongoose.model("Message", CommentSchema);
