const moment = require('moment');

let now = new moment();
console.log(now.toString());

console.log(now.format('YYYY/MM/DD - HH:mm'));