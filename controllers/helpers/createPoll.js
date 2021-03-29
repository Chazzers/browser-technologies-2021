const Poll = require('../../models/Poll.js')

function createPoll(req, res) {
	const { poll, options } = req.body

	const transformedOptions = transformOptions(options)
	const newPoll = new Poll({
		poll: poll,
		options: transformedOptions,
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