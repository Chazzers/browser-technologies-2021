# Polls online

Welcome to the Polls online repository. The main goal of this project was to create a website that is accessible to all users. With this web application you can create and answer polls that are created by users.


![Image of main app flow](https://user-images.githubusercontent.com/33430669/111624354-dd9c3b80-87eb-11eb-996c-21791bad1278.png)


## Installation

First clone the project in your preferred directory:

```bash
git clone https://github.com/Chazzers/browser-technologies-2021.git
```

After cloning install the project using:

```bash
npm install
```

After installing the project, this project will need a database on mongodb. 
Please follow these instructions: [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)

On mongodb create a db called 'polls' and collection called 'polls'. 

Next open the file: .env.example in your preferred text editor and edit the MONGODB_URI value to the value that is shown when you want to connect an **application** to your database. 

Finally change the file name from .env.example to .env. 

Now you can run the app in developer mode by running the following command in the terminal:

```bash
npm run dev
```

And in production mode by running the following command:

```bash
npm run start
```

## Features

### Create a poll
You can create a Poll. This poll will then be shown on the home page where people can click on it and then navigate to the voting page of the poll. 
![create-poll](https://user-images.githubusercontent.com/33430669/117184449-0a76d300-add9-11eb-9b37-6a57fba17238.jpg)

### Vote on a poll

You can vote on a Poll. The vote will be sent to the server and the server will then update the vote count in the database. The vote count of the current Poll will then be shown on the results page. 
![vote-poll](https://user-images.githubusercontent.com/33430669/117184447-0a76d300-add9-11eb-85c1-babda87dd497.jpg)

### Subscribe to a poll

You can subscribe to a Poll. When subscribed to a Poll you will receive a notification when the poll is closed with the text that shows the winner of the Poll. 

![subscribe-poll](https://user-images.githubusercontent.com/33430669/117184445-09de3c80-add9-11eb-9782-c9dbc350845b.jpg)

When you are subscribed to a poll the notification you receive from chrome on a windows 10 computer will look like this:

![poll-notification](https://user-images.githubusercontent.com/33430669/117184450-0b0f6980-add9-11eb-8ad5-9bd4583376f1.jpg)

## MongoDB and Express

I've chosen to use MongoDB as a database to store the created polls, and Express as a node server middleware  to render the polls and pages on the server. 

![Image of poll's stored in the database](https://user-images.githubusercontent.com/33430669/112876876-52158b00-90c6-11eb-9ee5-80657acb5dd5.png)


## Accessibility

Polls online is a project where i've made an effort to create a server side application that works without client-side JavaScript, except for the api I've added. This way the app stays accessible for users that disable JavaScript. The HTML or templating language is written as semantically as possible to make the website accessible to everyone, including visually impaired users and for example, keyboard only users. 

## Browser testing

### Test assignments

#### With JavaScript
1. Create a poll
2. Vote on a poll
3. Subscribe to a poll to receive a notification when the poll closes

#### Without JavaScript
1. Create a poll
2. Vote on a poll

Subscribing to a poll is done by sending a button event from the client to the server. This means that without JavaScript you can't subscribe.

### Google Chrome desktop
This is also the browser and environment I use for developing websites and web applications.

Everything works as expected, all my html elements work as expected, my css looks like I had intended it to look and my JavaScript works as intended and is not showing any errors. Also when turning off cookies I don't get any errors, whilst some of the functionality and mostly the integrity of the polls gets lost when disabling cookies (everyone can vote infinitely). Also making users create accounts would not solve this problem since you need cookies for things like sessions to work. Disabling JavaScript will remove the ability for a user to subscribe to a Poll. This is because subscribing to a poll so that you can receive notifications doesn't work without client-side JavaScript. 

### Firefox desktop

Everything works as expected, all my html elements work as expected, my css looks like I had intended it to look and my JavaScript almost works as intended. There was an issue with posting a subscription from the client to a route. It kept giving me errors and after looking into it I found out that I forgot to end the request on the server which then gives a response to the client to let the client know the request has ended. This was a weird one since I thought the fetch api would work the same way on both browsers. Maybe chrome has some sort of fallback which causes it to end requests automatically without giving an error. I might consider using Firefox in the future as my main development browser since it isn't as forgiving as Chrome is. 

### Chrome mobile

Everything works as expected, my html elements work. I tested this on different days and the first day I tested push notifications on my android phone I didn't receive notifications, but since I couldn't find anything online about push notifications not working on my phone I thought something was wrong with my code. The second day I tested push notifications I suddenly got 3 notifications of closed polls on my phone. This means that or something is wrong with my code, or nothing is wrong with my code and I was unlucky, or my website just decides daily if it works or not...

### Safari mobile

Ios devices do not support PushManager yet, so push notifications don't work in this browser (yet). This also means that because I have a fallback for when my JavaScript does not find PushManager in the window object that it will also not show the subscribe button. Everything else works as expected since most of my code is server side which relies on the node version the server is using. 
