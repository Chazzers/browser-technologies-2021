const render = require('../render/render.js')

function initCreatePoll(req, res) {
	const today = new Date().toISOString().slice(0, 10)
	const week = new Date(new Date().getTime() + (60*60*24*7*1000)).toISOString().slice(0, 10)
	return render(res, 'create-poll', {
		data: req.query,
		title: 'Create Poll',
		today: today,
		week: week,
		refresh: req.path
	})
}

module.exports = initCreatePoll