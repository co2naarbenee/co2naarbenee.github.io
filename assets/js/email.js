


function SubmitEmail() {

	var path = "../../__questions__/";

	var email = document.getElementById("email").value;
	let data = "Learning how to write in a file.";

	// require this to import fs module using the require module
	const fs = require('fs')

	try {
		// b59ef7bef5e2e674a7aed946bf202843
	  fs.renameSync('Output.json', 'b59ef7bef5e2e674a7aed946bf202843.json')
	  //done
	} catch (err) {
	  console.error(err)
	}

	// fs.writeFile(path + 'Output.txt', data,  (err) => { if (err) throw err; }  );

}
