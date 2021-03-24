const render = require('../render/render.js')

function initHome(req, res) {
	if(!req.session.user) {
		res.redirect('/login')
	} else {
		render(res, 'index')
	}
}

module.exports = initHome