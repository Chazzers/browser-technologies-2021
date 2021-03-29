const render = require('../render/render.js')
const Poll = require('../../models/Poll.js')

async function initPollResults(req, res) {
	const { id } = req.params
	const currentPoll = await Poll.findOne({_id: id})
	const totalVotes = currentPoll.options.reduce((a, b) =>{
		return a + b.votes
	}, 0)

	currentPoll.options.forEach(option => option.votePercentage = Math.round(option.votes / totalVotes * 100))

	render(res, 'poll-results', {
		data: currentPoll,
		title: 'Poll results'
	})
}

module.exports = initPollResults