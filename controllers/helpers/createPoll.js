const Poll = require('../../models/Poll.js')

function createPoll(req, res) {
	const { poll, options, time, date } = req.body

	const transformedOptions = transformOptions(options)
	

	const closingTime = new Date(`${date} ${time}`).getTime()

	const newPoll = new Poll({
		pollQuestion: poll,
		options: transformedOptions,
		closingTime: closingTime,
		closed: false
	})
	Poll.create(newPoll)
	res.redirect('/')
	return res.end()
}

function transformOptions(options = []) {
	return options.map((option, index) => {
		return {
			id: index,
			option: option,
			votes: 0,
		}
	})
}

module.exports = createPoll