const date = require('date-and-time')
const fs = require("fs")
const path = require("path")
const Direct = process.cwd();

const currentDate = new Date();
const val = date.format(currentDate,'DD-MM-YYYY,HH-mm-ss')
console.log(val)

fs.writeFile(path.join(Direct + `/${val}.txt`), `${val}`,function (err){
    if(err) throw err
})

fs.readFile(`${Direct}/${val}.txt`,"utf-8",function(err,data){
    if(err) throw err;
    console.log(data);
})