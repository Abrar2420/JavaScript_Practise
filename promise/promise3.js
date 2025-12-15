// JS promise methods

export const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let resolved = true;
    if (resolved) {
      //   console.log("Promise1 resolved");
      resolve("RESOLVED PROMISE 1");
    } else {
      //   console.log("Promise1 rejected");
      reject("PROMISE 1 REJECTED");
    }
  }, 600);
});

export const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let resolved = true;
    if (resolved) {
      //   console.log("Promise2 resolved");
      resolve("RESOLVED PROMISE 2");
    } else {
      //   console.log("Promise2 rejected");
      reject("PROMISE 2 REJECTED");
    }
  }, 800);
});

export const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let resolved = true;
    if (resolved) {
      //   console.log("Promise3 resolved");
      resolve("RESOLVED PROMISE 3");
    } else {
      //   console.log("Promise3 rejected");
      reject("PROMISE 3  REJECTED");
    }
  }, 500);
});

//~ Promise.all()
// its all or nothing.
// if all of the promises are resolved,
// the out will be there values as an array.
// if any of them are rejected
// no resolved promise will be shown
// .catch will catch and show only the first rejected message.
// AggregateError: All promises were rejected (output   )

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    // console.log(values);
  })
  .catch((err) => {
    // console.log(err);
  });

//~ Promise.allSettled
// it will go through all promises, reguardless of their status
// resslved ones have status: fulfilled, & value: , as output
// rejected ones have status: rejected, & value: , as output
// returns an array of objects

Promise.allSettled([promise1, promise2, promise3])
  .then((values) => {
    // console.log(values);
  })
  .catch((err) => {
    // console.log(err);
  });

//~ Promise.any()
// returns the first fulfulled promise
// ignores any rejected promise unless all of them are rejected
// shows error only if all the promise are rejected

Promise.any([promise1, promise2, promise3])
  .then((values) => {
    // console.log(values);
  })
  .catch((err) => {
    // console.log(err);
  });

//~ Promise.race()
// it settels as soon as the first promise finishes, resolve or reject
// it is usefull when the fastest result matters not the succesfull

Promise.race([promise1, promise2, promise3])
  .then((values) => {
    // console.log(values);
  })
  .catch((err) => {
    // console.log(err);
  });

//~ Promise.reject

// this will return a pending promise as .reject immidiately rejects
// so we need to pass its result not the promise
Promise.reject(promise1).catch((err) => {
  //   console.log(err);
}); // ❌ wrong code

// returns a reject with an custom error even after the promise1
// itself was resolved
promise1
  .then(() => {
    return Promise.reject(new Error("Something went wrong"));
  })
  .catch((err) => {
    // console.log(err); // ✔️ code, we are rejecting and throwing an error
  });

//~ Promise.Resolve()

// returns a resolve with a different value then ihe promise1 resolve
// as we are throwig a Promise.resolve
promise1
  .then(() => {
    return Promise.resolve("Forced resolved");
  })
  .then((value) => {
    // console.log(value);
  })
  .catch((err) => {
    // console.log(err);
  });
