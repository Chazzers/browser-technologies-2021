const mongoose = require('mongoose')


const pollSchema = new mongoose.Schema({
	poll: String,
	options: Array
}, {
	timestamps: true
})

module.exports = mongoose.model('Poll', pollSchema)