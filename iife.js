// Immediately Invoked Function Expression (IIFE)

(function tea(){ //named IIFE
    console.log(`db connected`)
})(); // db connected in :> iife you must need use ';' to stop the running function

((name) => { // unnamed IIFE
    console.log(`db conected two ${name}`)
})("nabina"); // db conected two nabina