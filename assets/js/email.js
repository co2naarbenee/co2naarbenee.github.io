import fs from fs;

function SubmitEmail() {

	var path = "../../__questions__/";

	var email = document.getElementById("email").value;
	let data = "Learning how to write in a file.";

	fs.writeFile('Output.txt', data,  (err) => { if (err) throw err; }  );



}
