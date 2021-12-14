const {readFile,writeFile} = require('fs');

console.log('start');

readFile('./Content/first.text','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./Content/second.text','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
    const second = result;
        writeFile('./Content/result-async.text',
        `Here is the result : ${first} , ${second} .`
        ,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task.');
        })
    })
})

console.log('starting next task')