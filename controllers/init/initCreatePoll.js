const render = require('../render/render.js')
let i = 0
const answers = []
function initCreatePoll(req, res) {
	console.log(req.query)
	const { add } = req.query
	
	if(add) {
		answers.push(`option ${i}`)
		i++
	}
	return render(res, 'create-poll', {
		answers: answers
	})
}

module.exports = initCreatePoll