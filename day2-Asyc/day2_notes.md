# Day 2 

I learned the difference between synchronous (step by step) and asynchronous (non-blocking) code.  
JavaScript uses an event loop that manages microtasks (Promises) and macrotasks (setTimeout, I/O).  

Callbacks let functions run after async tasks finish, but too many nested ones cause callback hell. 
Promises improve readability with .then() and .catch().  
Async/Await makes async code look synchronous and simplifies error handling with try,catch.  

Node.js uses non-blocking I/O to handle multiple async operations efficiently.  
I also practiced using fs.promises, setTimeout, and Promise.all().
