
function SubmitEmail() {

	const fs = require('fs');
	var path = "";

	var email = document.getElementById("email").value;
	let data = "Learning how to write in a file."

	fs.writeFile('Output.txt', data, (err) => { if (err) throw err; })

}
