const os  = require('os');

const user = os.userInfo();
const user2 = os.type();
const user3 = os.release();
const user4 = os.uptime();
console.log(user);
console.log(`The system uptime is : ${user4} seconds`);

const currentOS = {
    name: user2,
    release: user3,
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}   

console.log(currentOS);