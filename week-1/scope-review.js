(function(){

  // 1. This is an object that is readily available to the rest of the code
  // as it is in a higher scope
  var cloudObject = {};

  // 2. This variable is in a higher scope (outside the function) and is created, with the word 'var'
  var getThing;

  function getTimes () {
  	var year = document.getElementById('year').value
  	var month = document.getElementById('month').value
  	var day = document.getElementById('day').value
    // 3. Here we assign values from within the function to the higher scoped
    // object/variable
  	cloudObject.day = day;
    // 4. Hear we assign day to the previously created variable in a higher scope
    // we do not use 'var' in order to reference the variable on line 8
  	getThing = day;
  }

  // ** ERROR, we can't see this variable from here because it is inside the getTimes 
  // function scope
  console.log(day);
  // 4. Calling the function
  getTimes();

  // Ways to access the variable value...
  // 5. Checking if the object has the data assigned from line 16
  console.log(cloudObject.day);
  // 6. Checking if the variable has the data assigned to it from line 19
  console.log(getThing);

}());
