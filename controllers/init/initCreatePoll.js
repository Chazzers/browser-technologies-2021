const render = require('../render/render.js')

function initCreatePoll(req, res) {
	return render(res, 'create-poll', {
		data: req.query,
		title: 'Create Poll',
	})
}

module.exports = initCreatePoll