const render = require('../render/render.js')
const Poll = require('../../models/Poll.js')

async function initHome(req, res) {
	const polls = await Poll.find({})
	const cookies = req.cookies
	const votedPollIds = Object.keys(cookies)

	const date = new Date()
	const timeToOld = 15*60*1000

	polls.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

	const newPolls = polls.filter(poll => date - new Date(poll.createdAt) < timeToOld && !votedPollIds.includes(`${poll._id}`))

	const oldPolls = polls.filter(poll => date - new Date(poll.createdAt) > timeToOld)

	const answeredPolls = polls.filter(poll => votedPollIds.includes(`${poll._id}`))

	render(res, 'index', {
		data: oldPolls,
		title: 'Polls',
		newPolls: newPolls,
		answeredPolls: answeredPolls,
		polls: polls
	})
}

module.exports = initHome