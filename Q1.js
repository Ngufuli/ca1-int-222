// Q.1 Create a node js application that takes input from the user and calculates the sum of first 20 even
// numbers and store the result in a file ‘output.txt’ which already exists. Also print the success message
// on console if success is there and in case of error then error message gets displayed on console.
// [10 marks]

const fs = require('fs');
const prompt = require('prompt-sync')();

const size = 21;
const arr = new Array(size);


for(i=0; i<arr.length; i++){
    if(i===0){
        continue
    }
    else if(i===1){
        arr[i] = Number(prompt(`Enter your 1st even number: `));
    }else if(i===2){       
        arr[i] = Number(prompt(`Enter your 2nd even number: `));
    }else if(i===3){
        arr[i] = Number(prompt(`Enter your 3rd even number: `))
    }else{
        arr[i] = Number(prompt(`Enter your ${i}th even number: `));
    }
}

var sum = arr.reduce(function(a, b){
    return a + b;
}, 0);

fs.appendFile('sum.txt', sum.toString(), (err)=>{
    if(err) throw err.message;
    console.log(`Success!`)
})