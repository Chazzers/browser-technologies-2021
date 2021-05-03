const Poll = require('../../models/Poll.js')

async function postSubscription(req) {
	const { id, subscription } = req.body

	const currentPoll = await Poll.findOne({ _id: id })
	const subscriptionsArray = currentPoll.subscriptions

	subscriptionsArray.push(subscription)

	await Poll.updateOne({ _id: id }, {
		subscriptions: subscriptionsArray
	})
}

module.exports = postSubscription