const {readFileSync, writeFileSync} = require('fs')

// const fs = require('fs');
console.log('1');
const first = readFileSync('./content/first.txt','utf8');

const second = readFileSync('./content/second.txt','utf8');

// console.log(first,second);

writeFileSync(
    './content/result--sync.txt',
    `Here is the result of the first and second : ${first}, ${second}`,
    {flag: 'a'}
    )
 

    console.log('done');
    console.log('starting');