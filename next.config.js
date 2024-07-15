/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    output: "export",
    serverActions: true,
  },
  env: {
    FIREBASE_API_KEY: "AIzaSyCWAZQA76zuTULA_idrDiyq99bXZjudjUU",
    FIREBASE_AUTH_DOMAIN: "me-remind-me.firebaseapp.com",
    FIREBASE_PROJECT_ID: "me-remind-me",
    FIREBASE_STORAGE_BUCKET: "me-remind-me.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "608898568782",
    FIREBASE_APP_ID: "1:608898568782:web:c7d182a63fc7a6d0cc691f",
    FIREBASE_MEASUREMENT_ID: "G-4GEPXK4LTQ",
  },
};

module.exports = nextConfig;
