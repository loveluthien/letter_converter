// function convertLetters() {
// 	var input = document.getElementById("input").value;
	
// 	// Make a request to the server-side script using fetch()
// 	fetch("/convert", {
// 		method: "POST",
// 		headers: {
// 		"Content-Type": "application/json"
// 		},
// 		body: JSON.stringify({ input: input })
// 	})
// 	.then(response => response.json())
// 	.then(data => {
// 		document.getElementById("output").textContent = data;
// 	})
// 	.catch(error => {
// 		console.error("Error:", error);
// 	});
// }


function convertLetters() {
	var input = document.getElementById("input1").value;

	// Make a request to the server-side script using fetch()
	fetch("http://127.0.0.1:5000/convert", {
		method: "POST",
		headers: {
		"Content-Type": "application/json"
		},
		body: JSON.stringify({ input: input })
	})
		.then(response => response.json())
		.then(data => {
		var resultElement = document.getElementById("result");
		resultElement.textContent = data;
		// resultElement.style.display = "block";
		resultElement.style.display = "inline";
		})
		.catch(error => {
		console.error("Error:", error);
		});
	// console.log('run convertLetters');
	}
	
function displayInput() {
	var input = document.getElementById("input").value;
	document.getElementById("output").textContent = input;
	// console.log('run displayInput');
	}
	
// function placeholder() {
// 	var pholder = document.getElementById("input1").placevalueholder;
// 	document.getElementById("output").placeholder = pholder;
// 	// console.log('run displayInput');
// 	}
	
// placeholder() 
var pholder = document.getElementById("input1").placevalueholder;
document.getElementById("output").placeholder = pholder;