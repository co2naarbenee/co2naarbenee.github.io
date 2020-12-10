
function SubmitEmail() {

	var path = "../../__questions__/";

	var email = document.getElementById("email").value;
	let data = "Learning how to write in a file.";

	const fs = require('fs');
	fs.writeFile('Output.txt', data,  (err) => { if (err) throw err; }  );


}
