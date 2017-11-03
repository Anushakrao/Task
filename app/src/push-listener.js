self.addEventListener('push', (event) => {
  event.waitUntil(
    self.registration.showNotification('Push Notification', {
      body: 'This is a test notification'
    })
  );
});
