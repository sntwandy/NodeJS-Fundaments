let name = process.env.NAME || 'Not name';
const web = process.env.MY_WEB || 'Not web';

console.log(`Hello ${name}`);
console.log(`My website is: ${web}`)