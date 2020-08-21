// Here we require firebase into the file
var firebase = require('firebase')

// An object that we eventually export to modules
var firebaseObj = {
  // firbaseConfig as a property
  firebaseConfig: {
    apiKey: 'AIzaSyACjdbrUWNxvzfbs686EcijhWDCcRuXj7s',
    authDomain: 'learning-firebase-64659.firebaseapp.com',
    databaseURL: 'https://learning-firebase-64659.firebaseio.com',
    projectId: 'learning-firebase-64659',
    storageBucket: 'learning-firebase-64659.appspot.com',
    messagingSenderId: '1048519956227',
    appId: '1:1048519956227:web:dba34d8dfdb21c5c48fb36',
    measurementId: 'G-E21513BRD0'
  },
  // getDb as a method
  getDb: function () {
    const firebaseApp = firebase.initializeApp(firebaseObj.firebaseConfig)
    const db = firebaseApp.firestore()
    // We eventually return the db for final use...
    return db
  }
}
// Exporting the object and the function invocation with returned 'db'
module.exports = firebaseObj.getDb()
