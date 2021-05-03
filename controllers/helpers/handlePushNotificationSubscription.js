function handlePushNotificationSubscription(req, res) {
	const subscriptionRequest = req.body
	const susbscriptionId = createHash(JSON.stringify(subscriptionRequest))
	subscriptions[susbscriptionId] = subscriptionRequest
	res.status(201).json({ id: susbscriptionId })
}

module.exports = handlePushNotificationSubscription