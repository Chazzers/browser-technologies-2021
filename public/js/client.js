function createEventlisteners(userInput = '', selector = '', callback) {
	const elements = document.querySelectorAll(selector)
	return elements.forEach(element => element.addEventListener(userInput, (event)=> callback(event)))
}

function createEventlistener(userInput = '', buttonId = '', formId = '', callback) {
	const button = document.querySelector(buttonId)
	return button.addEventListener(userInput, (event)=> callback(formId))
}
let i = 2
function createAnswer(form) {
	
	const answer = document.createElement('input')
	const label = document.createElement('label')

	answer.type = 'text'
	answer.name = 'options'
	answer.id = `option-${i}`
	
	label.setAttribute('for', `option-${i}`)
	label.innerHTML = `Option ${i}`

	const submit = document.querySelector(`${form} #submit`)
	const formElement = document.querySelector(form)

	formElement.insertBefore(label, submit)
	formElement.insertBefore(answer, submit)
	i++
}

// document.querySelector('#submit').addEventListener('click', submitForm)

function initCreatePoll() {
	createEventlistener('click', '#add-answer', '#create-poll', createAnswer)
}

initCreatePoll()