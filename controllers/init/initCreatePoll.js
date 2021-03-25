const render = require('../render/render.js')

function initCreatePoll(req, res) {
	console.log(req.body)
	return render(res, 'create-poll', {
		data: req.query
	})
}

module.exports = initCreatePoll