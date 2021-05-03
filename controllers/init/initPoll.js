const render = require('../render/render.js')
const Poll = require('../../models/Poll.js')

async function initPoll(req, res) {
	const { id } = req.params
	const currentPoll = await Poll.findOne({ _id: id })
	const cookies = req.headers.cookie
	if(cookies && cookies.includes(id)) {
		return res.redirect(`/polls/${req.params.id}/results`)
	}
	render(res, 'poll', {
		data: currentPoll,
		title: 'Answer the poll!',
		refresh: req.path
	})
}

module.exports = initPoll