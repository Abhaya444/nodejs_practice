// Create a server using Nodejs

// 1. Import http library/module
const http = require('http');
const fs = require("fs");

//2. Create Server
const server = http.createServer((req, res) =>{
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log,(err, data) =>{
        switch(req.url){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("I am Abhaya");
                break;
            default:
                res.end('404 Not found');
        }
        
    });
    // console.log(req.url);
    // if(req.url == '/product'){
    //     res.end('This is a product page');
    // } else if(req.url == '/user'){
    //     res.end('This is User Page');
    // }
    // Here comes the request
   
});

// 3. Specify the port to listen to client's requests
server.listen(8000, () => {
    console.log("server is listening on port 8000");
});

// console.log("server is listening on poer 3100");