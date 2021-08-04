function callback(q) {
    console.log(q);
};

const idSetTImeout = setTimeout(callback, 3000, 5);

clearTimeout(idSetTImeout);

// setTimeout(function callback() {
//     console.log('Hello!');
// }, 3000);

// setInterval(callback, 1000);

// function callback() {
//     console.log('Hello!');
// };