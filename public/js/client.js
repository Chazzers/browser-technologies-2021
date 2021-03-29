function checkNotificationPromise() {
    try {
		notification.requestPermission().then();
    } catch(e) {
    	return false;
    }
    return true;
}

function createNotification() {
	const notification = new Notification('New poll!', { body: 'A new poll has been opened!'})
}

const fifteenMinutes = 5*60*1000

function askNotificationPermission() {
	// function to actually ask the permissions
	function handlePermission(permission) {
	  // set the button to shown or hidden, depending on what the user answers
		if(Notification.permission === 'denied' || Notification.permission === 'default') {
			console.log('If you want notifications bla bla bla')
		} else {
			const newPoll = document.querySelector('.new-polls')
			setTimeout(() => window.localStorage.removeItem('notification'), fifteenMinutes)
			
			if(newPoll && !window.localStorage.getItem('notification')) {
				createNotification()
				window.localStorage.setItem('notification', 'sent')
			}	
	  }
	}
  
	// Let's check if the browser supports notifications
	if (!('Notification' in window) && !('localStorage' in window)) {
	  console.log("This browser does not support notifications.");
	} else {
	  if(checkNotificationPromise()) {
		Notification.requestPermission()
		.then((permission) => {
		  handlePermission(permission);
		})
	  } else {
		Notification.requestPermission((permission) => {
		  handlePermission(permission);
		});
	  }
	}
}

askNotificationPermission()