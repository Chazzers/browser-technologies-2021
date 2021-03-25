# Necessities

Client-side javascript:
Render a polls form client-side (because the amount of options are not known)

function that takes a button click event that adds an text input element to the form.

Find inspiration for this on creating a task list

functions:
```javascript
createAnswer() // adds a text input to current form element
```

routes:

- /create-poll
- /index (list of polls)
- /login
- /:pollId
- /profile (your own polls)

### Features

- create account
- login to account
- create poll (with answers)
- Make it so people can add their own answers to poll(optional)
- Post poll to database through web sockets
- 


```html
<form action="/post-url" method="POST">
	<label for="poll">Write a question or statement for your poll</label>
	<button type="button" onclick="createQuestion">
	<input type="text" placeholder="Question/Statement">
</form>
```


### Questions

- Je heb voor een session cookies nodig, dus het wordt lastig voor ons om als accounts noodzakelijk zijn niet zonder cookies te werken...
- Cookies 
