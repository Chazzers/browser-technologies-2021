const render = require('../render/render.js')

function initCreatePoll(req, res) {
	return render(res, 'create-poll')
}

module.exports = initCreatePoll