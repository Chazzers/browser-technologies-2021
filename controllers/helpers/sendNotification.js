const webpush = require('web-push')

async function sendNotification(subscription, poll, winner) {
	const { pollQuestion } = poll

	const payload = JSON.stringify({
		title: `${pollQuestion} results are in`,
		content: `This question won: ${winner.option}`,
		url: `{}`
	})
	webpush.sendNotification(subscription, payload).catch(error => console.error(error))
}

module.exports = sendNotification