// function pushNotificationSupported() {
// 	return 'serviceWorker' in navigator && 'PushManager' in window
// }

// function initPushNotifications() {
// 	return Notification.requestPermission((result) => result)
// }

// function sendNotification() {
// 	const title = 'Poll closed'
// 	const options = {
// 		body: 'A poll has been closed',
// 		icon: '',
// 		tag: 'poll-closed'
// 	}

// 	navigator.serviceWorker.ready.then((serviceWorker) => serviceWorker.showNotification(title, options))
// }

// function registerServiceWorker() {
// 	navigator.serviceWorker.register('/sw.js').then(swRegistration => console.log('nice'))
// }
// const isPushNotificationSupported = pushNotificationSupported()

// if(isPushNotificationSupported) {
// 	registerServiceWorker()

// 	initPushNotifications().then(function (consent){
// 		if(consent === 'granted') {
// 			sendNotification()
// 		}
// 	})
// }

// const pushServerPublicKey = ''

// async function createNotificationSubscription() {
// 	return navigator.serviceWorker.ready.then((serviceWorker) => 
// 		serviceWorker.pushManager
// 			.subscribe({
// 				userVisibleOnly: true,
// 				applicationServerKey: pushServerPublicKey
// 			})
// 			.then((subscription) => {
// 				console.log('User is subscribed.', subscription)
// 				fetch('push-server/push-subscription', {
// 					headers: { 
// 						'content-type': 'application/json;charset=UTF-8', 
// 						'sec-fetch-mode': 'cors'
// 					},
// 					body: JSON.stringify(subscription),
// 					method: 'POST',
// 					mode: 'cors'
// 				})
// 				return subscription
// 			})
// 	)
// }

// fetch('push-server/push-subscription', {
// 	headers: { 
// 		'content-type': 'application/json;charset=UTF-8', 
// 		'sec-fetch-mode': 'cors'
// 	},
// 	body: JSON.stringify(subscription),
// 	method: 'POST',
// 	mode: 'cors'
// })

const subscribeBtn = document.getElementById('subscribe')
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

if ('serviceWorker' in navigator && 'PushManager' in window) {
	if(subscribeBtn) {
		subscribeBtn.style.display = 'block'
		if (!subscribeBtn.classList.contains('active')) {
			subscribeBtn.addEventListener('click', subscribe)
		}
	}
}