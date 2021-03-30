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

## MongoDB and Express

I've chosen to use MongoDB as a database to store the created polls, and Express as a node server middleware  to render the polls and pages on the server. 

![Image of poll's stored in the database](https://user-images.githubusercontent.com/33430669/112876876-52158b00-90c6-11eb-9ee5-80657acb5dd5.png)


## Accessibility

Polls online is a project where i've made an effort to create a server side application that works without client-side JavaScript, except for the api I've added. This way the app stays accessible for users that disable JavaScript. The HTML or templating language is written as semantically as possible to make the website accessible to everyone, including visually impaired users and for example, keyboard only users. 

## Browser testing

### Chrome mobile with JavaScript

The web application works. I can create polls using my app on my mobile phone. The styling looks like it's supposed to. I can turn on notifications when my browser and i receive notifications on my phone when i allow them. 

### Safari Mobile

Coming soon

### Chrome Desktop

The web application works as expected. I can receive notifications on my desktop whenever on the client a new poll is found. I can create polls on my desktop and i can answer these polls as well. 
### Firefox desktop

The web application works as expected. I can create polls on my desktop and i can answer these polls as well. I can't receive notifications on firefox because i need to create a button the user has to click on himself to allow notifications. 



