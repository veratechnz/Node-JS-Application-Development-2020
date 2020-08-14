<template>
  <div class="hello">
    <h1>Database Time 1</h1>
    <button type="button" name="button" @click="deleteTheFish">Delete Fish</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'HelloWorld',
  methods: {
    deleteTheFish: function () {
      // 4. A method and js pattern that deletes a document from the database
      db.collection('pet-store').doc('fish-dude').delete().then(function () {
        console.log('Document successfully deleted!')
      }).catch(function (error) {
        console.error('Error removing document: ', error)
      })
    }
  }
}

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCIIBuT3P84SMkauTDcL5cUnYyUGmEtumg',
  authDomain: 'student-demo-live.firebaseapp.com',
  databaseURL: 'https://student-demo-live.firebaseio.com',
  projectId: 'student-demo-live',
  storageBucket: 'student-demo-live.appspot.com',
  messagingSenderId: '802402432813',
  appId: '1:802402432813:web:afbbac99a957785ead45a4'
}

// Initialize Firebase
var firebaseApp = firebase.initializeApp(firebaseConfig)
// Get the database
var db = firebaseApp.firestore()

console.log(db)

// Pattern for getting and rendering all data in pet-house collection Ecma 6
// 1. A pattern that iterates through a collection listing all of the documents
db.collection('pet-store').onSnapshot(function (pets) {
  // pets is the data response or collection - we use a forEach
  // loop to loop through and then list
  pets.forEach(function (doc) {
    // eachDoc is a js object representing each document in the collection
    var eachDoc = doc.data()
    // logging eachDoc to the console
    console.log(eachDoc)
  })
})

// Retrieving a single document Ecma 5
// onSnapshot A snapshot is a picture of the data at a particular database reference at a single point in time.
db.collection('pet-store').doc('fish-dude').onSnapshot(function (response) {
  // log the fish per object
  console.log(response.data())
})

// Adding a document to the collection
// Add a new document in collection "cities"
db.collection('pet-store').doc('the-mouse').set({
  gender: 'male',
  name: 'Squeek',
  type: 'mouse'
})
  .then(function () {
    console.log('Document successfully written!')
  })
  .catch(function (error) {
    console.error('Error writing document: ', error)
  })

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
