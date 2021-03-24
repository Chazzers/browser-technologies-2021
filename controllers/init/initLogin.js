const render = require('../render/render.js')

function initLogin(req, res) {
	render(res, 'login')
}

module.exports = initLogin