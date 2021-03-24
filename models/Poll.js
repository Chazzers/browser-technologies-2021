const mongoose = require('mongoose')


const pollSchema = new mongoose.Schema({
	poll: String,
	options: Array,
	madeBy: String
})

module.exports = mongoose.model('Poll', pollSchema)