console.log('Something');
console.info('info: Something');
console.error('Error: Something');
console.warn('Warn: Something');


let table = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'M',
    }
];

console.table(table);

console.log('Conversation');
console.group('conver');
console.log('Hola');
console.log('Hey');
console.log('Hey');
console.log('Bye');
console.groupEnd('conver');

console.log('Other thing');

function function1() {
    console.group('function1');
    console.log('Its from Function1');
    console.log('Too');
    console.log('Too');
    console.log('Too');
    function2();
    console.groupEnd('function1')
};

function function2() {
    console.group('function2');
    console.log('We are in Function 2');
    console.groupEnd('function2');

}
console.log('Starting');
function1();

console.count('Times');
console.count('Times');
console.count('Times');
console.countReset('Times');
console.count('Times');