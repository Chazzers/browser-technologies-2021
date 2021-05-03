const Poll = require('../../models/Poll.js')
const sendNotification = require('./sendNotification.js')

async function checkPolls() {
	const openPolls = await Poll.find({ closed: false })

	

	openPolls.forEach(openPoll => {
		if(new Date() >= openPoll.closingTime) {
			Poll.updateOne({ _id: openPoll._id }, {
				closed: true
			}, error => error && console.error(error))

			const totalVotes = openPoll.options.reduce((a, b) =>{
				return a + b.votes
			}, 0)
			const results = openPoll.options.map(option => ({
				...option,
				percentage: Math.round(option.votes/totalVotes * 100)
			}))
			
			const winner = results.reduce((prev, result) => prev.votes > result.votes ? prev : result)

			openPoll.subscriptions.forEach(subscription => sendNotification(subscription, openPoll, winner))
		}
	})
}

module.exports = checkPolls