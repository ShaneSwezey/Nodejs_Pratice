console.log('Starting app');


setTimeout(() => {
    console.log('Inside of call back');
}, 2000);

setTimeout(() => {
    console.log("No delay");
}, 0);

console.log('Finishing up');
