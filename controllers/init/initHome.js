const render = require('../render/render.js')
const { v4: uuidv4 } = require('uuid');

function initHome(req, res) {
	
	render(res, 'index')
	req.body.id = uuidv4()
	console.log(req.body)
}

module.exports = initHome