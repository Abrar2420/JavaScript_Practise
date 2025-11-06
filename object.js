// JS Object Practice

// let myObj = new Object();  "object constructor" syntax
// let myObj = {}; // "object literal" syntax

// // assigning property to the object created
// myObj.name = "Abrar";
// myObj.id = "24fg6h8";
// myObj.age = 22;
// myObj.gender = "male";
// myObj.email = "abrar242002@gmail.com";
// myObj.loggedIn = false;

// // updating properties in object
// myObj.loggedIn = true;

// console.log(myObj);

// // the in operator with objects
// //The syntax is: "key" in object

// console.log("age" in myObj);
// // will return true as there is a property "age" in the the object.
// console.log("date" in myObj); // output false

// user details in form of an object

const user = {
  userName: "abrar456",
  email: "abrar242002@gmail.com",
  userId: "8c2a9f0f9b3a",

  profile: {
    name: {
      firstName: "Syed",
      givenName: "Abrar",
      fullName: function () {
        return `${this.firstName} ${this.givenName}`;
      },
    },
    age: 22,
    address: {
      permanent: {
        house: "2",
        road: "11, Mirpur",
        city: "Dhaka",
        Country: "Bangladesh",
      },
      current: {
        house: "14/2/C",
        road: "3-A, Dhanmondi",
        city: "Dhaka",
        Country: "Bangladesh",
      },
    },
    contact: {
      phone: {
        mobile: "+88 01711911366",
        tel: "+88 02336368",
      },
    },
    social: {
      github: "github.com/abrar2420",
      facebook: "facebook/abrar2420",
      linkdin: "linkdin/abrar2420",
    },
  },
  userStatus: {
    loggedIn: false,
    lastLogin: {
      date: "06-11-2025",
      device: {
        type: "mobile",
        os: "android",
        browser: "chrome",
      },
    },
    loginHistory: [
      {
        date: "05-11-05",
        device: {
          type: "desktop",
          os: "windows",
          browser: "chrome",
        },
      },
      {
        date: "02-11-05",
        device: {
          type: "tablet",
          os: "iPadOS",
          browser: "safari",
        },
      },
    ],
  },
};

console.log(user.profile.name.fullName());
