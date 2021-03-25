function addAnswer(req, res) {
	const { add, poll, options } = req.body
	res.redirect(`/create-poll?add=${add}&poll=${poll}&options=${options}`)
}

module.exports = addAnswer