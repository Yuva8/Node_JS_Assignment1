const fs = require('fs');
const http = require('http');

const currentTime = new Date();

const directory = './Files';

const date = currentTime.getDate();
const month = currentTime.getMonth() + 1;
const year = currentTime.getFullYear();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

const currentdate = `${date}-${month}-${year}`
const currenttime = `${hours}hrs-${minutes}mins-${seconds}secs`
const filename = `${currentdate} and ${currenttime}.txt`

//Writing Date and time file
fs.writeFile(`${directory}\\${filename}`,`Current date: ${currentdate} and Current time : ${currenttime}`,(data, err)=>{
console.log("TimeStamp is recorded in new file")
})

//reading Directory
const readfiles = fs.readdir(`${directory}`,(err, data)=>{
   console.log(data)
})

const server=http.createServer((request,response)=>{
    if(request.url==='/'){
        response.write(JSON.stringify({
            Current_date:`${currentdate}`,
            time:`${currenttime}`
        }))
    }
    else if(request.url==='/files'){
        response.write(JSON.stringify({
            folder_files:`${filename}` ,
           
        }))
    }
    else{
        res.write("{wrong port}")
    }
    response.end();
})

server.listen(3001);
