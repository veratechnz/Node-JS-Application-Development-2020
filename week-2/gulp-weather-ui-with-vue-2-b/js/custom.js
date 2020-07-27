// custom js file

(function(){

	var app = new Vue({
	  el: '#app',
	  // The data object provided by Vue.js
	  data: {
	   	weather: false,
	   	updateTitle: 'You loaded this page on ' + new Date().toLocaleString()
	  },
	  // This is how we add methods/functions to the vue instance
	  methods: {
	  	getTheDay: function (indexAddition) {
	  		// A variable index containing days as reference points
	  		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	  		// Create a date instance with the date constructor
	  		var date = new Date();
	  		// Find the current date/today index number via the date instance
	  		var currentDay = date.getDay();
	  		// Add the indexAddition Argument to the number
	  		var finalRef = currentDay + indexAddition;
	  		// console.log(days[currentDay])
	  		return days[finalRef]
	  	}
	  }
	})

	function makeAjaxRequest () {
		// GET request for remote image in node.js
		axios({
		  method: 'get',
		  url: 'https://api.openweathermap.org/data/2.5/onecall?lat=-41.282626&lon=-174.773390&units=metric&exclude=hourly,minute&appid=66ce6f7e945db003aaa343f0bc010dc8'
		}).then(function (response) {
		 	app.weather = response.data.daily
		 	console.log(response.data)
		});
	}

	makeAjaxRequest()

})(); // iffe ENDS