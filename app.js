const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');



const app = express()
const port = process.env.PORT || 3000
require('dotenv').config()


const initCreatePoll = require('./controllers/init/initCreatePoll.js')
const initHome = require('./controllers/init/initHome.js')
const createPoll = require('./controllers/helpers/createPoll.js')
const addAnswer = require('./controllers/helpers/addAnswer.js')
const removeAnswer = require('./controllers/helpers/removeAnswer.js')

const uri = process.env.MONGODB_URI;
const id = uuidv4()

const sessionConfig = {
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'polls' });

app.set('view engine', 'ejs')
	.set('views', './views')

	.use(session(sessionConfig))
	.use(express.static('public'))
	.use(express.urlencoded({
		extended: true
	}))
	.use((req,res,next) => {
		req.body.id = id
		next()
	})
	
	.get('/', initHome)
	.get('/create-poll', initCreatePoll)
	
	.post('/submit-poll', createPoll)
	.post('/create-poll', addAnswer)
	.post('/submit-remove-answer', removeAnswer)
	
	.listen(port, () => {
		console.log(`this app is litening on: http://localhost:${port}`)
	})
