function loadData() {
  
	// How to create a dictionary object
	let dictionary = new Object();

	let emptyDictionary = {};

	let petDictionary = { 
		"Pidgey" : { Age: 0.5, Color: "Gray", Gender : "Male"},
		"Mocha" : { Age: 0.5, Color: "Brown", Gender : "Female"},
  };

	let wcDictionary = { 
		1 : { Team: "Argentina" },
		2 : { Team: "France" }
  };

	let dictBool = { 
		true : { Message: "Confirmed" },
		false : { Message: "Denied" },
  };

	document.getElementById('p1').innerHTML = Object.keys(petDictionary);
	document.getElementById('p2').innerHTML = Object.keys(wcDictionary);
	document.getElementById('p3').innerHTML = Object.keys(dictBool);

	// How to Add Values to the Dictionary Object 
	petDictionary["Apples"] = { Age: 2, Color: "Green", Gender : "Male"};
	wcDictionary[3] = { Team: "Morocco" };

	document.getElementById('p4').innerHTML = Object.keys(petDictionary);
	document.getElementById('p5').innerHTML = Object.keys(wcDictionary);

	// How to Access Values Based on a Key
	let dictionaryValue = petDictionary["Mocha"];
	console.log(dictionaryValue); 

	document.getElementById('p6').innerHTML = dictionaryValue.Age + ", " + dictionaryValue.Color + ", " + dictionaryValue.Gender;

	// How to Iterate Over the Dictionary
	console.log(Object.keys(petDictionary));

	for (const key of Object.keys(petDictionary)) {
		console.log(key + ": ");
		console.log(petDictionary[key]);
	};

	// Check if a value exists in dictionary
	let inDictionary = 'Mocha' in petDictionary; // returns true
	let notInDictionary = 'a' in petDictionary; // returns false

	let exists = petDictionary.hasOwnProperty('Mocha'); // returns true
	let doesNotExist = petDictionary.hasOwnProperty('a'); // returns false

	document.getElementById('p7').innerHTML = inDictionary;
	document.getElementById('p8').innerHTML = notInDictionary;
	document.getElementById('p9').innerHTML = exists;
	document.getElementById('p10').innerHTML = doesNotExist;

	// How to Delete a Value in the Dictionary
	petDictionary['Apples'] = null; // Deletes value of an item
	delete petDictionary['Apples']; // Deletes entire item
	console.log(petDictionary);

	document.getElementById('p11').innerHTML = Object.keys(petDictionary);
}

