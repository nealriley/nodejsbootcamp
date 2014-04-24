/**
 * process.js
 * Examples of the process object in nodeJS
 */

//******************************************************************************//

/*
 * Reading command line arguments:
 * 
 * process.argv contains all command-line arguements
 * passed to the node app
 * 
 * The command > node process.js arg1 arg2
 * produces:
 * 	0: node
 * 	1: /path/to/process.js
 * 	2: arg1
 * 	3: arg2
 */

process.argv.forEach(function(val, index, array) {
	console.log(index + ': ' + val);
});

//******************************************************************************//


//******************************************************************************//
/*
 * Working with directories:
 * 
 * cwd() : current directory
 * chdir(dir) : changes cwd() to new directory
 * 
 */

console.log("Current directory is: " + process.cwd());
//Change to /tmp
try {
	process.chdir('/tmp');
	console.log("New directory is: " + process.cwd());
}
catch (err) {
	console.log('chdir: ' + err);
}

//******************************************************************************//


//******************************************************************************//
/*
 * Host information 
 * 
 * arch : Process Architecture
 * platform : darwin (OS X), freebsd, linux, sunos or win32
 * 
 */

console.log("Node is currently running on the " + process.platform 
			+ " platform on the " + process.arch + " architecture.");

//******************************************************************************//


