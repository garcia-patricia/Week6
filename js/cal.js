//JS file
(function () {
	console.log("JS File loaded");

	//Vars

	var num1 = document.querySelector("#input1");

	var num2 = document.querySelector("#input2");

	var equals = document.querySelector("#trigger");

	var outcome = document.querySelector("#value");

	var selPlus = document.querySelector("#plus");

	var selMinus = document.querySelector('#minus');

	var userChoice = "";
	//console.log(num1);
	//console.log(num2);
	//console.log(equals);
	//console.log(outcome);
	//console.log(selMinus);
	// console.log(selPlus); 


	//Functions instructions when trigger is hit
	function doStuff() {
		var total = "";
		//console.log(userChoice);
		// console.log("from addStuff");
		// document.getElementById('input1').value;
		// console.log(num1.value);
		// console.log(num2.value);
		if(userChoice == "add"){
			total = parseInt(num1.value) + parseInt(num2.value);}
		else
		{
			total = parseInt(num1.value) - parseInt(num2.value);
		}
		// console.log(total);
		outcome.innerHTML = total;

	}

	function selCal(evt){
		//console.log("From selCal");
		//condition
		/*if(selPlus.innerHTML == "+") {
			console.log("User clicked +");
		}
		

		if(selMinus.innerHTML == "-"){
			console.log("User clicked -");
		} */

		//look up event argument
		// can see what the user clicked on by adding 'current target.id'
		//console.log(evt.currentTarget.id);
		if(evt.currentTarget.id == "plus"){
			console.log("add");
			userChoice = "add";


		}else{
			console.log("sub");
			userChoice = "sub";
		}



	}

	//Listeners
	selPlus.addEventListener("click", selCal, false);
	selMinus.addEventListener("click", selCal, false);
	equals.addEventListener("click", doStuff, false);


}) ();