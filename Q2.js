// Q.2 Create a console based node.js application that should open and read from a file name “test.txt”,
// if file is empty then it should print on console that “File is Empty” otherwise content should be
// appended into file “test1.txt” and printed on the console. 

const fs = require('fs');

var fileName = 'test.txt';
var content = "Hello world, welcome to NodeJS";

console.log('Opening "text.txt" file.');
fs.open(fileName, (err, data)=>{
    if(err) throw err;
    console.log('Checking if the file is empty.')
    fs.stat(fileName,(err, stats)=>{
        if(stats.size === 0){
            console.log('The file is empty.')
        }
    })
})