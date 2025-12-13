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
    // calling resolve means the promise is succesfull the js will go to any .then in the file, and any value inside the resolve can be passed on to that then
    resolve({ username: "Tom", email: "tom@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  // parameter here cantains the value form the resolve from the promise
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ usermane: "Ben", password: "123" });
    } else {
      // reject will to caought at .catch
      reject("ERROR: Result not found");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.usermane;
    // this will return a promise which can the be passed inside another .then and obtaine the returned value in their parameter
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    // runs either way if the promise is resolved of rejected
    console.log("This runs anyways");
  });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ usermane: "Sam", password: "123" });
//     } else {
//       // reject will to caought at .catch
//       reject("ERROR: Result not found");
//     }
//   }, 1000);
// });

// fetch returns a promise which is accesable by .then
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((api) => {
//     console.log(api);
//     return api.json();
//   })
//   .then((apiData) => {
//     console.log(apiData);
//     console.log(typeof apiData);
//     let allUsername = [];
//     apiData.map((user) => {
//       allUsername.push(user.username);
//     });

//     return allUsername;
//   })
//   .then((allUsername) => {
//     console.log(allUsername);
//   })
//   .catch((err) => {
//     console.log(err, "Error: something went wrong");
//   })
//   .finally(() => {
//     console.log("done");
//   });

fetch("https://dummyjson.com/products")
  .then((api) => {
    console.log(api);
    return api.json();
  })
  .then((apiData) => {
    console.log(apiData);

    return apiData.products;
  })
  .then((dataProducts) => {
    console.log(dataProducts);
    let allTitle = [];
    dataProducts.map((_, index) => {
      allTitle.push(dataProducts[index].title);
    });
    console.log(allTitle);
  });

fetch("https://dummyjson.com/image/150")
  .then((response) => response.blob()) // Convert response to blob
  .then((blob) => {
    console.log("Fetched image blob:", blob);
  });
