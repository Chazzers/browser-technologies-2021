const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3000
require('dotenv').config()


const initCreatePoll = require('./controllers/init/initCreatePoll.js')
const initHome = require('./controllers/init/initHome.js')
const initLogin = require('./controllers/init/initLogin.js')
const initRegister = require('./controllers/init/initRegister.js')
const createPoll = require('./controllers/helpers/createPoll.js')
const createAccount = require('./controllers/helpers/createAccount.js')
const login = require('./controllers/helpers/login.js')
const addAnswer = require('./controllers/helpers/addAnswer.js')
const removeAnswer = require('./controllers/helpers/removeAnswer.js')

const uri = process.env.MONGODB_URI;
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
	
	.get('/', initHome)
	.get('/create-poll', initCreatePoll)
	.get('/login', initLogin)
	.get('/register', initRegister)
	
	.post('/submit-poll', createPoll)
	.post('/submit-register', createAccount)
	.post('/submit-login', login)
	.post('/submit-add-answer', addAnswer)
	.post('/submit-remove-answer', removeAnswer)
	
	.listen(port, () => {
		console.log(`this app is litening on: http://localhost:${port}`)
	})