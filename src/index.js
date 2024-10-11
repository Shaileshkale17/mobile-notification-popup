// src/index.js

import "./styles.css";

export class NotificationPopup {
  constructor(message, duration = 3000) {
    this.message = message;
    this.duration = duration;
    this.notificationElement = this.createNotification();
  }

  createNotification() {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerText = this.message;

    document.body.appendChild(notification);
    setTimeout(() => {
      this.hideNotification(notification);
    }, this.duration);

    return notification;
  }

  hideNotification(notification) {
    notification.classList.add("hide");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500); // Match this time with the CSS transition duration
  }
}
