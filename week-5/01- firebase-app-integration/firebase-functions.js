// 1. A method and js pattern that deletes a document from the database

db.collection('pet-store').doc('fish-dude').delete().then(function () {
  console.log('Document successfully deleted!')
}).catch(function (error) {
  console.error('Error removing document: ', error)
})


// 2. Pattern for getting and rendering all data in pet-house collection Ecma 6
// A pattern that iterates through a collection listing all of the documents

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
​
// 3. Retrieving a single document Ecma 5
// onSnapshot A snapshot is a picture of the data at a particular database reference at // a single point in time.

db.collection('pet-store').doc('fish-dude').onSnapshot(function (response) {
  // log the fish per object
  console.log(response.data())
})
​
// 4. Adding a document to the collection
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
