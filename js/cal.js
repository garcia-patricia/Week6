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
	//console.log(num1);
	//console.log(num2);
	//console.log(equals);
	//console.log(outcome);
	//console.log(selMinus);
	// console.log(selPlus); 


	//Functions instructions when trigger is hit
	function addStuff() {
		// console.log("from addStuff");
		// document.getElementById('input1').value;
		// console.log(num1.value);
		// console.log(num2.value);
		var total = parseInt(num1.value) + parseInt(num2.value);
		// console.log(total);
		outcome.innerHTML = total;

	}


	//Listeners
	equals.addEventListener("click", addStuff, false);


}) ();