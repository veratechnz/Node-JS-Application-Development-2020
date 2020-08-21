<template>
<div class='hello'>
    <div class='container'>
     <div class='row'>
       <div class='col-md-4 order-md-2 mb-4'>
         <h4>Current Pets:</h4>
         <ul class='list-group mb-3'>
           <li class='list-group-item d-flex justify-content-between lh-condensed'>
             <div>
               <!-- Referencing and placing a single cat name into the DOM -->
               <h6 class='my-0'>{{catName}}</h6>
             </div>
           </li>
           <li class='list-group-item d-flex justify-content-between lh-condensed'>
             <div>
               <!-- Dumping allPets data into the DOM, for further refrencing and DOM manipulation with eventual
               v-for loop -->
               <h6 class='my-0'>{{allPets}}</h6>
             </div>
           </li>
           <!-- A v-for loop that loops over the allPets array and outputs it to the DOM with -->
           <!-- list elements == "item in allPets" creates the loop through the allPets array.-->
           <li class='list-group-item d-flex justify-content-between lh-condensed' v-for="item in allPets" :key="item.type">
             <!-- Each item represents a sinble pet/item in the array -->
             {{item.type}}
           </li>
         </ul>
       </div>
       <div class='col-md-8 order-md-1'>
         <h4>Add or Delete Pets:</h4>
         <form class='needs-validation' novalidate>
           <div class='mb-3'>
             <input type='text' class='form-control' v-model="petName" id='address' placeholder='Pet name...' required>
             <div class='invalid-feedback'>
               Please enter your shipping address.
             </div>
           </div>
           <div class='mb-3'>
             <input type='text' class='form-control' v-model="petType" id='address' placeholder='Pet type...' required>
             <div class='invalid-feedback'>
               Please enter your shipping address.
             </div>
           </div>
           <div class='mb-3'>
             <input type='text' class='form-control' v-model="petGender" id='address2' placeholder='Pets gender...'>
           </div>
          <button type='button' class='btn btn-primary' v-on:click='aMethod'>Add</button>
          <button type='button' class='btn btn-primary' v-on:click='check'>check</button>
          <button type='button' class='btn btn-danger'>Delete</button>
         </form>
       </div>
     </div>
     <!-- row ENDS -->
    </div>
    <!-- Container Div ENDS -->
  </div>
  <!-- Hello Div ENDS -->
</template>

<script>
// 1. Importing the firebase module
import firebase from 'firebase'

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
// Get the firebase database
var db = firebaseApp.firestore()

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello this',
      message: '',
      thing: false,
      catName: '****',
      allPets: [],
      petName: '',
      petType: '',
      petGender: ''
    }
  },
  methods: {
    aMethod: function () {
      var vueInstance = this
      // Gets a single document
      // db.collection('pet-house').doc('7beCht2AlkidtGbJUESg').onSnapshot(function (response) {
      //   var name = response.data().name
      //   vueInstance.catName = name
      // })
      // This method loops through all documents in a collection
      db.collection('pet-house').onSnapshot(function (pets) {
        // pets is the data response or collection - we use a forEach
        // loop to loop through and then list
        pets.forEach(function (doc) {
          // eachDoc is a js object representing each document in the collection
          var eachDoc = doc.data()
          // logging eachDoc to the console
          console.log(eachDoc)
          // Pushing each array item into the vue data property 'allPets'
          // above...
          vueInstance.allPets.push(eachDoc)
        })
      })
    }, // aMethod ENDS
    check: function () {
      // This console uses v-model in the DOM which binds the input values
      // to the properties in 'data' within the vue instance above.
      console.log(this.petGender + this.petType + this.petName)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
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
