

/* LEARNING NODE JS PART 1

    TOPICS
    - FILE SYSTEM (fs) MODULE
    - OPERATING SYSTEM (os) MODULE
    - SET TIMEOUT FUNCTION
    - IMPORT CODE FROM ANOTHER JS FILE (USER DEFINED MODULES)
    - DNS (dns) MODULE 
    - PROCESS GLOBAL OBJECT
    - path MODULE
    - STREAM PIPING
    - QUERY STRING (querystring) MODULE

*/

//-------------------------------------------------------------------------------------------

/*
    = module -> collection of JavaScript functions and objects that can be used by external applications.
    = require -> allows to include modules; it reads a JavaScript file, executes the file, and then proceeds to return the exports object
*/

//-------------------------------------------------------------------------------------------

/* CONSOLE LOG PRESENT WORKING DIRECTORY ( fs [File System] -> to access physical system ) */

// const fs = require('fs');

// //Synchronous method call -> simplier
// try {
//     let files = fs.readdirSync("./");
//     console.log(files);
// } catch {
//     console.log("directory does not exist");
// }

// //Asynchronpus method call
// fs.readdir("./", (err,files) => {
//     if(!err){
//         console.log(files);
//     } else {
//         console.log("directory does not exist");
//     }
// });

//--------------------------------------------------------------------------------------------------

/* CONSOLE LOG MEMORY AVAILABLE ( os -> has functions to interact with the operating system) */

// const os = require('os');

// let totalMem = os.totalmem();
// let freeMem = os.freemem();
// let usedMem = totalMem - freeMem;

// console.log(`Total memory: ${totalMem}`);
// console.log(`Free memory: ${freeMem}`);
// console.log(`Used memory: ${usedMem}`);

// console.log(os.totalmem() / 1024 / 1024) // Your RAM in MB; kilobyte, megabyte, gigabyte, tetrabyte

//--------------------------------------------------------------------------------------------------

/* SET TIMEOUT FUNCTION */
/*
setTimeout( () => {
    console.log("Displays after 5 seconds");
}, 5000);
*/

//--------------------------------------------------------------------------------------------------

/* IMPORT CODE FROM ANOTHER JS FILE (USER DEFINED MODULES) & CONSOLE LOG */

// const calc = require('./calculator');

// console.log(calc.pi);
// console.log(calc.add(5,6));
// console.log(calc.subtarct(4,5));
// console.log(calc.multiply(2,2));
// console.log(calc.divide(1,2));

//--------------------------------------------------------------------------------------------------

/* ERROR FIRST CALLBACK & READ DATA FROM A TEXT FILE */

// // Synchronous 
// const fs = require('fs');
// try {
//     let files = fs.readFileSync('./file.txt', "utf-8");
//     console.log(files);
// } catch {
//     console.log("There is an error");
// }

// // Asynchronous
// const fs = require('fs');

// fs.readFile('./file.txt', "utf-8", (err, data) => {
//     if (!err) {
//         console.log(data);
//     } else {
//         console.log("There is an error");
//     }
// });

//--------------------------------------------------------------------------------------------------

/* DNS MODULE ( dns -> get information of given hostname ) */

// const dns = require('dns');

// let ipAddress = dns.lookup("yahoo.com.ph", function(err, addresses) {
//     console.log(`IP Address of Yahoo Philippines website is ${addresses}`);
// });


//--------------------------------------------------------------------------------------------------

/* PROCESS GLOBAL OBJECT */

//console.log(process.env.PROCESSOR_REVISION);


//--------------------------------------------------------------------------------------------------

/* path MODULE -> handle and transform file paths */

// const path = require('path');

// let pathObj = path.parse(_filename);
// console.log(pathObj);


//--------------------------------------------------------------------------------------------------

/* fs MODULE - READING AND WRITING FILES */

// //Synchronous method calling -> simplier
// const fs = require('fs');
// let data = fs.readFileSync("./file.txt", "utf-8");
// console.log(data);
// fs.writeFileSync("./newFile.txt", data);

// //Asynchronous method calling
// const fs = require('fs');

// fs.readFile("./file.txt", "utf-8", function(err,data) {
//     if(err){
//        return console.log(err)
//     } else {
//         fs.writeFile("./newFile.txt", data, function(err) {
//             if(err){
//                 return console.error(err);
//             } else {
//                 console.log("data written to newFile.txt");
//             }
//         });
//     }
// });


//--------------------------------------------------------------------------------------------------

/* fs MODULE - CREATING AND REMOVING DIRECTORIES */

// //Synchronous method calling
// const fs = require("fs");

// try{
//     fs.mkdirSync("./sample");
//     console.log("created 'test' directory");
// } catch(err) {
//     console.log("directory already exist");
// }

// try{
//     fs.rmdirSync("./sample");
// } catch(err){
//     console.log("directory does not exist");
// }

// // Asynchronous method calling
// const fs = require("fs");

// fs.mkdir("./sample", function (err) {
//     if (err) {
//         return console.error(err);
//     } else {
//         console.log("created a 'test' directory");
//     }
// });

// fs.rmdir("./sample", function (err) {
//     if (err) {
//         return console.error(err);
//     } else {
//         console.log("removed the 'test' directory");
//     }
// });


//--------------------------------------------------------------------------------------------------

/* STREAM PIPING ( Stream -> collection of data ) -> reads and write from one file to another file */

// const fs = require("fs");

// let readableStream = fs.createReadStream("./readText.txt");
// let writableStream = fs.createWriteStream("./createdFile.txt");

// readableStream.pipe(writableStream);


//--------------------------------------------------------------------------------------------------

/* QUERY STRING MODULE -> methods dealing with query string; query strin to JSON and vice versa */

// const queryString = require("querystring");

// let student = {name: "Chaeyoung", location: "only marcy"};

// console.log(queryString.stringify(student));

// let str = queryString.unescape("name=Marcy Villegas&location=Chaeyoung only");

// console.log(queryString.parse(str));


//--------------------------------------------------------------------------------------------------

console.log( __filename );
console.log( __dirname );