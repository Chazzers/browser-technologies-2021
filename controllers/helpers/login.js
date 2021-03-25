const User = require('../../models/User.js')

async function login(req, res) {
	try {
		const { username, password } = req.body
		await User.findOne({
			username: username
		}, (error, data) => {
			if(error){
				console.error(error)
			} 
			if(data.password === password) {
				req.session.user = {
					username: data.username,
					password: data.password,
					nickname: data.nickname,
					myPolls: data.myPolls,
					answeredPolls: data.answeredPolls
				}
				console.log(req.session.user)
				res.redirect('/')
			}
		})
	} catch(error) {
		next(error)
	}
}

module.exports = login