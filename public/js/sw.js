self.addEventListener('push', e => {
	const { title, content, url } = e.data.json()
  
	self.registration.showNotification(title, {
		body: content,
		data: {
			url: url
		}
	})
})
  
self.addEventListener('notificationclick', e => {
	e.notification.close()
	e.waitUntil(
		clients.openWindow(e.notification.data.url)
	)
})
