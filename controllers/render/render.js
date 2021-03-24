function render(res, view, data){
	if(data) {
		return res.render(view, data)
	} else {
		return res.render(view)
	}
}

module.exports = render