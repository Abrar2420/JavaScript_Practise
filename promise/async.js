const p1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let resolved = true;
      if (resolved) {
        //   console.log("Promise2 resolved");
        res("RESOLVED p1");
      } else {
        // console.log("Promise2 rejected");
        rej("REJECTED p1");
      }
    }, 600);
  })
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });
};
const p2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let resolved = true;
      if (resolved) {
        //   console.log("Promise2 resolved");
        res("RESOLVED p2");
      } else {
        //   console.log("Promise2 rejected");
        rej("REJECTED p2");
      }
    }, 500);
  })
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });
};
const p3 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let resolved = false;
      if (resolved) {
        //   console.log("Promise2 resolved");
        res("RESOLVED p3");
      } else {
        //   console.log("Promise2 rejected");
        rej("REJECTED p3");
      }
    }, 800);
  })
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
      throw new Error("something went wrong");
    });
};

// by calling the fucntion
// it will not run synchronusly, but asynchronusly
// p1();
// p2();
// p3();

// async awaint will make the functions run synchronusly
// it will wait until p1() is setteled, then p2(), then p3()
// it can be used instead of then chaining
const callPromise = async () => {
  try {
    await p1();
    console.log("code after p1");
    await p2();
    console.log("code after p2");
    await p3();
    console.log("code after p3");
  } catch (error) {
    console.log(error);
  }
};

callPromise();
