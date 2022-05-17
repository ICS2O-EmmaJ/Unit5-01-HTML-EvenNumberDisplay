// Created by: Emma Janani
// Created in: May 2022
// This file contains the JS functions for index.html

"use strict"

function displayNumbers() {
	// initalize numbers as an empty string
	let numbers = ""
	
	// get the user min and max
	let userMin = parseInt(document.getElementById('userMin').value)	
	let userMax = parseInt(document.getElementById('userMax').value)	

  // initialize the counter to 0
	let counter = userMin
  
	// use a while loop to display the numbers from min up to the max number
	while ((counter >= userMin) && (counter <= userMax)) {
    if (counter % 2 == 0) {
      	 // build the string of numbers with a line break each time
		     numbers = numbers + counter + "<br>"
    }
  
		// increment the counter
		counter = counter +1
	}
	
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = numbers
}
