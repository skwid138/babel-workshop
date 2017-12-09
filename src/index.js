require("babel-polyfill");

function doubleAsync (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value * 2), 3000);
    }) // end return
} // end doubleAsync

async function myAsyncFunction () {
    var answer = await doubbleAsync(1337);
    console.log(answer);
} // end myAsyncFunction

// call func
myAsyncFunction();