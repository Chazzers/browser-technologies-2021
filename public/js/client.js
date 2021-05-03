const subscribeBtn = document.getElementById('subscribe')
const noCookieText = document.getElementById('no-cookie-text')
const noNotificationsText = document.getElementById('no-notifications-text')
const pollId = window.location.pathname.split('/')[2]

function urlBase64ToUint8Array(base64String) {
	const padding = '='.repeat((4 - base64String.length % 4) % 4)
	const base64 = (base64String + padding)
		.replace(/-/g, '+')
		.replace(/_/g, '/')
  
	const rawData = window.atob(base64)
	const outputArray = new Uint8Array(rawData.length)
  
	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i)
	}
	
	return outputArray
}

async function subscribe() {
	const register = await navigator.serviceWorker.register('/js/sw.js')

	if(!register.pushManager) {
		subscribeBtn.style.display = 'none'
	}

	const subscription = await register.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: urlBase64ToUint8Array(vapidKey)
	})

	subscribeBtn.innerHTML = 'Subscribed'
	subscribeBtn.classList.add('active')

	await fetch('/subscription', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			subscription: subscription,
			id: pollId
		})
	})
}
// check if serviceWorker exists in the navigator object and if PushManager exists in the window object
if ('serviceWorker' in navigator && 'PushManager' in window) {
	// check if subscribeBtn exists
	if(subscribeBtn) {
		// check if notifications are not denied and if cookies are enabled
		if(navigator.cookieEnabled) noCookieText.style.display = 'none'
		if(Notification.permission !== 'denied') noNotificationsText.style.display = 'none'
		if(Notification.permission !== 'denied' && navigator.cookieEnabled) {
			subscribeBtn.style.display = 'block'
			if (!subscribeBtn.classList.contains('active')) {
				subscribeBtn.addEventListener('click', subscribe)
			}
		}
		// if notifications are disabled or cookies are not enabled
		else {
			subscribeBtn.style.display = 'none'
		}
	}
}