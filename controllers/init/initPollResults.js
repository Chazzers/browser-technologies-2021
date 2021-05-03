const render = require('../render/render.js')
const Poll = require('../../models/Poll.js')

async function initPollResults(req, res) {
	const { id } = req.params
	const currentPoll = await Poll.findOne({ _id: id })
	const totalVotes = currentPoll.options.reduce((a, b) =>{
		return a + b.votes
	}, 0)

	const publicKey = process.env.VAPID_PUBLIC_KEY

	currentPoll.options.forEach(option => option.votePercentage = Math.round(option.votes / totalVotes * 100))

	if(currentPoll.closed) {
		currentPoll.options.sort((a, b) => a - b)
	}

	render(res, 'poll-results', {
		data: currentPoll,
		title: 'Poll results',
		refresh: req.path,
		publicVapidKey: publicKey,
		closed: currentPoll.closed
	})
}

module.exports = initPollResults