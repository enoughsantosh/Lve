importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

// Initialize Firebase in the service worker
const firebaseConfig = {
  apiKey: "AIzaSyDLW0P7Op6coJkNzJj0ck9pLNdneJplcbI",
  authDomain: "love-6996.firebaseapp.com",
  projectId: "love-6996",
  storageBucket: "love-6996.appspot.com",
  messagingSenderId: "1050433920317",
  appId: "1:1050433920317:web:99246747017f6bdca1b954",
  measurementId: "G-EKDTE6WQY1"
};

// Initialize Firebase in the service worker
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
