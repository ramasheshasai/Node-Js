const fs = require('fs');

console.log("Start");

const data = fs.readFileSync('file.txt', 'utf-8');  // Blocking
console.log(data);

console.log("End");
