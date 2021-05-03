const render = require('../render/render.js')
const Poll = require('../../models/Poll.js')

async function initHome(req, res) {
	const polls = await Poll.find({})
	const cookies = req.cookies
	const votedPollIds = Object.keys(cookies)

	polls.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

	const newPolls = polls.filter(poll => poll.closed !== true && !votedPollIds.includes(`${poll._id}`))

	const closedPolls = polls.filter(poll => poll.closed === true && !votedPollIds.includes(`${poll._id}`))

	const answeredPolls = polls.filter(poll => votedPollIds.includes(`${poll._id}`) && poll.closed !== true)

	const answeredPollsClosed = polls.filter(poll => votedPollIds.includes(`${poll._id}`) && poll.closed === true)

	render(res, 'index', {
		data: closedPolls,
		title: 'Polls',
		newPolls: newPolls,
		answeredPolls: answeredPolls,
		polls: polls,
		refresh: req.path,
		answeredPollsClosed:answeredPollsClosed
	})
}

module.exports = initHome