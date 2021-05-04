const Poll = require('../../models/Poll.js')

async function postSubscription(req, res) {
	const { id, subscription } = req.body

	const currentPoll = await Poll.findOne({ _id: id })
	const subscriptionsArray = currentPoll.subscriptions

	subscriptionsArray.push(subscription)

	console.log(subscription)

	await Poll.updateOne({ _id: id }, {
		subscriptions: subscriptionsArray
	})
	res.end()
}

module.exports = postSubscription