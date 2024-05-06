// NotificationComponent.js

import React from 'react';

function NotificationComponent() {
  const showNotification = () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      new Notification('Hi there!');
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Hi Bye!');
        }
      });
    }
  };

  return (
    <div>
      <button onClick={showNotification}>Show Notification</button>
    </div>
  );
}

export default NotificationComponent;

