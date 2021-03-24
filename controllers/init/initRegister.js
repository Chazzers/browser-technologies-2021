const render = require('../render/render.js')

function initRegister(req, res) {
	const error = req.query.error
	if(error) {
		render(res, 'register', {
			error: error
		})
	} else {
		render(res, 'register', {
			error: undefined
		})
	}
	
}

module.exports = initRegister