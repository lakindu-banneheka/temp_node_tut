const {readFileSync,writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./Content/first.text','utf8');
const second = readFileSync('./Content/second.text','utf8');

console.log(first,second)

writeFileSync(
    './Content/result-sync.text',
    `Here is the result : ${first} , ${second} `,
    {flag : 'a'}
    )

    console.log('Done with the task');
    console.log('starting the next one')