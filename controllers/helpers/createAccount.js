const User = require('../../models/User.js')
const render = require('../render/render.js')

function createAccount(req, res) {
	const { username, password, nickname } = req.body
	const allUsers = User.find({}, (error, users) => {
		if(error) {
			console.log(error)
		} else {
			users.forEach(user => {
				if(user.username === username) {
					res.redirect('/register?error=username')
				} else if(user.password === password) {
					res.redirect('/register?error=password')
				} else if(user.nickname === nickname) {
					res.redirect('/register?error=nickname')
				} else {
					const newUser = new User({
						username: username,
						password: password,
						nickname: nickname,
						myPolls: [],
						answeredPolls: []
					})
					User.create(newUser)
					// res.redirect('/')
					return res.end()
				}
			})
		}
	})
}

module.exports = createAccount