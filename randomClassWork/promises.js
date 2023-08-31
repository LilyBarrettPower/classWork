/*Task 1: Create 6 JS functions which print the pizza processing
statements and call those functions in sequence. Use a mix of
function declarations, expressions and arrow functions.
Task 2: Make the functions asynchronous by using setTimeout with
different time durations, maintaining the right order.
Task 3: Modify the asynchronous functions to use Promises and
achieve the required result.
Task 4: Modify the functions to use async/await and achieve the
required result.
*/
//function declaration

function preparePizza() { // create the function 
    return new Promise((resolve) => { // add the promise 
        setTimeout(() => { // add the timeout
            console.log("Started preparing pizza");
            resolve(); // resolve the promise
        }, 1000); // time out by 1 second
    })
}
//named function expression
const base = function madeBase() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Made the base");
            resolve();
        }, 2000);
    })
}
// unnamed function expression
const sauceCheese = function() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Added the sauce and cheese");
            resolve();
        }, 3000);
    })
}
// arrow function 
const toppings = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Added the pizza toppings");
            resolve();
        }, 4000);
    })
}


function cooked() {
    return new Promise((resolve) => {
        setTimeout(()=> { 
            console.log("Cooked the pizza");
            resolve();
        }, 5000);
    })
}

const done = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Pizza is ready"); 
            resolve();
        }, 6000);
    })
}

async function makePizza() { // create async function 
    await preparePizza();
    await base();
    await sauceCheese();
    await toppings();
    await cooked();
    await done();
    // call all functions but make them wait for the previous function to call
}

makePizza().then(() => {
    console.log("your pizza is READY!");
})
// call all functions, use .then to handle the request 







/*

let myPromises = [new Promise((resolve, reject) => {if (preparePizza()) resolve('success');else reject('failed')}),
                new Promise((resolve, reject) => {if (base()) resolve('success');else reject('failed')}),
                new Promise((resolve, reject) => {if (sauceCheese()) resolve('success');else reject('failed')}),
                new Promise((resolve, reject) => {if (toppings()) resolve('success');else reject('failed')}),
                new Promise((resolve, reject) => {if (cooked()) resolve('success');else reject('failed')}),
                new Promise((resolve, reject) => {if (done()) resolve('success');else reject('failed')})
                ]

Promise.all(myPromises)
.then((resolve) => console.log("all promises were successful"));
.catch((reject) => console.log("some promises were unsuccessful"));

*/
