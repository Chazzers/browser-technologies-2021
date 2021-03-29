const Poll = require('../../models/Poll.js')

async function submitAnswer(req, res) {
	const optionId = req.body.options
	const pollId = req.params.id
	const optionIdToNumber = +optionId

	res.cookie(pollId, 'voted')

	const currentPoll = await Poll.findOne({_id: req.params.id})
	const options = currentPoll.options

	options.forEach(option => option.id === optionIdToNumber ? option.votes++ : '')

	await currentPoll.updateOne({ options:  options})
	res.redirect(`/polls/${req.params.id}/results`)
}

module.exports = submitAnswer