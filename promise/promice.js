// JS promise practise

//* --> the promese object represents the eventual completion (or failure) of  an asynchromous operation and its resulting value.

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

// .then works if the promise is resolved
// its saying that if the promise is resolved then do this
promiseOne.then(() => {
  // this console.log will only work when the first parameter (resolve) in the promise is called which signals that the promise is done succesfully then the javascript looks at any then
  console.log("Promise resolved");
});

// function promiseOne1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Async task completed");
//       resolve("promise done");
//     }, 1000);
//   });
// }

// promiseOne1().then((data) => {
//   console.log(data);
//   console.log("promised resolved");
// });

// directly craeting a promising with out storing it
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 completed");
    resolve();
  }, 1000);
}).then(() => {
  // .then can be added after the promise itself
  console.log("promise 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Tom", email: "tom@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});
