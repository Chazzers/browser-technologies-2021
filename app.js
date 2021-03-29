const express = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT || 3000
require('dotenv').config()


const initCreatePoll = require('./controllers/init/initCreatePoll.js')
const initHome = require('./controllers/init/initHome.js')
const createPoll = require('./controllers/helpers/createPoll.js')
const addAnswer = require('./controllers/helpers/addAnswer.js')
const initPoll = require('./controllers/init/initPoll.js')
const initPollResults = require('./controllers/init/initPollResults.js')
const submitAnswer = require('./controllers/helpers/submitAnswer.js')

const uri = process.env.MONGODB_URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'polls'})
	.catch(error => console.error(error))
	
app
	.set('view engine', 'ejs')
	.set('views', './views')

	.use(cookieParser())
	.use(express.static('public'))
	.use(express.urlencoded({
		extended: true
	}))
	.use(express.json())
	
	
	.get('/', initHome)
	.get('/create-poll', initCreatePoll)
	.get('/polls/:id', initPoll)
	.get('/polls/:id/results', initPollResults)
	
	.post('/submit-poll', createPoll)
	.post('/create-poll', addAnswer)
	.post('/polls/:id', submitAnswer)
	
	.listen(port, () => {
		console.log(`this app is litening on: http://localhost:${port}`)
	})
