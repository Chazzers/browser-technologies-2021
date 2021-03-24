const User = require('../../models/User.js')

async function login(req, res) {
	try {
		const { username, password } = req.body
		const currentUser = await User.findOne({
			username: username
		}, (error, data) => {
			if(error){
				console.error(error)
			} else if(data.password === password) {
				req.session.user = {
					username: data.username,
					password: data.password,
					nickname: data.nickname,
					myPolls: data.myPolls,
					answeredPolls: data.answeredPolls
				}
				res.redirect('/')
			}
		})
		return currentUser
	} catch(error) {
		console.error(error)
	}
}

module.exports = login