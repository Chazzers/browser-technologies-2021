const mongoose = require('mongoose')

const pollSchema = new mongoose.Schema({
	pollQuestion: String,
	options: Array,
	closingTime: Date,
	closed: Boolean,
	subscriptions: Array
}, {
	timestamps: true
})

module.exports = mongoose.model('Poll', pollSchema)