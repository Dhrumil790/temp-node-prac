const http = require('http');

// const server = http.createServer((req,res)=>{
//   // console.log(req);
//   if(req.url === '/'){  
//     res.end('Welcome to the home page');

//   }
//   if(req.url === '/about'){
//     res.end('Here is our short history');

//   }
//   res.end(`<h1>Oops!</h1>
//   <p>Page you are looking for doesn't exist</p>
//   <a href="/">back home</a>
//   `);
  
// })

const _ = require('lodash');

const items = [1,[2,[3, [4]]]];
console.log(items);
const newItems = _.flattenDeep(items)
console.log(newItems);


// server.listen(3000);



