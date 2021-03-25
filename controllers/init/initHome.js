const render = require('../render/render.js')

function initHome(req, res) {
	console.log(req.body)
	render(res, 'index')
}

module.exports = initHome