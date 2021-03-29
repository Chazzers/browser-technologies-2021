const options = []


function addAnswer(req, res) {
	const optionValues = []
	if(req.body.addOrRemove === 'add') {
		options.push({ key: `option-${1}`,  value: ''})
	}
	if(req.body.addOrRemove === 'remove' && req.body.options.length > 2) {
		options.pop()
	}
	if(Array.isArray(req.body.options)) {
		req.body.options.forEach(option => optionValues.push(option))
	}
	else if(req.body.options) {
		optionValues.push(req.body.options)
	}
	const optionsArray = options.map((option, index) => {
		if(optionValues[index]) {
			return {
				id: `option-${index + 1}`, 
				value: optionValues[index],
				name: `Option-${index + 1}`
			}
		}
		return {
			id: `option-${index + 1}`, 
			value: '',
			name: `Option-${index + 1}`
		}
	})
	req.body.options = optionsArray
	
	res.render('create-poll', {
		data: req.body,
		title: 'Create poll'
	})
}

module.exports = addAnswer