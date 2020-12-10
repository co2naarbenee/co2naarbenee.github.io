
function SubmitEmail() {

	var path = "../../__questions__/";

	var email = document.getElementById("email").value;
	let data = "Learning how to write in a file.";

	setTimeout(() => {  console.log("waited 2000 ms");  },  2000);
	var fs = require('fs');
	fs.writeFile(path + 'Output.txt', data,  (err) => { if (err) throw err; }  );

}
