<template>
  <div class="hello">
    <h1>A Real Message</h1>
    <button type="button" name="button" @click="deleteItem">Delete Item</button>
  </div>
</template>

<script>
// src/firebaseConfig.js
import firebase from 'firebase'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    deleteItem: function () {
      db.collection('pet-house').doc('the-mouse').delete().then(function () {
        console.log('Document successfully deleted!')
      }).catch(function (error) {
        console.error('Error removing document: ', error)
      })
    } // deleteItem Method ENDS
  } // methods END
} // export ENDS

// ****** Firebase Import & Setup
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDRo5-pZkaNUi896olMteozG271OPhHbP0',
  authDomain: 'student-demo-a.firebaseapp.com',
  databaseURL: 'https://student-demo-a.firebaseio.com',
  projectId: 'student-demo-a',
  storageBucket: 'student-demo-a.appspot.com',
  messagingSenderId: '283564645682',
  appId: '1:283564645682:web:15894b8f3347d18df10b2b'
}
// Initialize Firebase
var firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
// ****** Firebase Import & Setup ENDS

// Pattern for getting and rendering all data in pet-house collection Ecma 6
db.collection('pet-house').onSnapshot((pets) => {
  pets.forEach((doc) => {
    const ball = doc.data()
    console.log(ball)
  })
})

// Retrieving a single document Ecma 5
db.collection('pet-house').doc('7beCht2AlkidtGbJUESg').onSnapshot(function (pet) {
  console.log(pet.data())
})

// Adding a document to the collection
// Add a new document in collection "cities"
db.collection('pet-house').doc('the-mouse').set({
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
