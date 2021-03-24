const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	nickname: String,
	myPolls: Array,
	answeredPolls: Array
})

module.exports = mongoose.model('User', userSchema)