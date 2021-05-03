function addAnswer(req, res) {
	const optionValues = []
	const today = new Date().toISOString().slice(0, 10)
	const week = new Date(new Date().getTime() + (60*60*24*7*1000)).toISOString().slice(0, 10)
	if(req.body.addOrRemove === 'remove' && req.body.options.length > 2) {
		req.body.options.pop()
	}
	if(req.body.options) {
		req.body.options.forEach(option => optionValues.push(option))
	}
	if(req.body.addOrRemove === 'add') {
		optionValues.push('')
	}
	const newOptionsArray = optionValues.map((option, index) => {
		return {
			id: `option-${index + 1}`, 
			value: option,
			name: `Option-${index + 1}`
		}
	})
	req.body.options = newOptionsArray
	
	res.render('create-poll', {
		data: req.body,
		title: 'Create poll',
		today: today,
		week: week,
		refresh: req.path
	})
}

module.exports = addAnswer