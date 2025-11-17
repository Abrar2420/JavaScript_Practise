import { createElement } from "./elements.js";
import {
  navStyle,
  navAttr,
  containerStyle,
  containerAttr,
  navLeftStyle,
  navLeftAttr,
  navLogoAttr,
  navLogoStyle,
  navMenuAttr,
  navMenuStyle,
  navMenuListAttr,
  navMenuListStyle,
  navMenuListItemAttr,
  navMenuListItemStyle,
  navRightAttr,
  navRightStyle,
  navSearchAttr,
  navSearchStyle,
  navSigninAttr,
  navSigninStyle,
  navSignupAttr,
  navSignupStyle,
  navIconAttr,
  navIconStyle,
  mainStyle,
  mainBoxAttr,
  mainBoxStyle,
  passwordHeadingAttr,
  passwordHeadingStyle,
  passwordInputAttr,
  passwordInputStyle,
  passwordBtnAttr,
  passwordBtnStyle,
} from "./styles.js";

//& ============== github navbar JS ===================

// selecting the root div element to append all its child element
const root = document.querySelector(".root");

//* the createELement function will create an element,
//* and add its styling and set its attributes,
//* and then also append the element to the path provided
//* it takes four parameters which are:
//*  --> 1. the name of the element (tag) we want to create
//*  --> 2. the path (location in document), where we want to append the element
//*  --> 3. the attributes (takes an object) we want to set for the element
//*  --> 4. the styles (takes an object) we want to set for the element
//* and then it returns the new element

//& creating elements in the document
let nav = createElement("nav", root, navAttr, navStyle);
let container = createElement("div", nav, containerAttr, containerStyle);
let navLeft = createElement("div", container, navLeftAttr, navLeftStyle);
let navLogo = createElement("img", navLeft, navLogoAttr, navLogoStyle);
let navMenu = createElement("ul", navLeft, navMenuAttr, navMenuStyle);
let navMenuList;
let navMenuListItem;
let menuText = [
  "Platform",
  "solutions",
  "Resources",
  "Open Source",
  "Enterprise",
  "Pricing",
];
for (let i = 0; i < menuText.length; i++) {
  // creating 6 li>a using for loop and array consinting of all the <a> text.
  // by adding an item in the menuText, will result in another munuItem (li>a)
  navMenuList = createElement("li", navMenu, navMenuListAttr, navMenuListStyle);
  navMenuListItem = createElement(
    "a",
    navMenuList,
    navMenuListItemAttr,
    navMenuListItemStyle
  );
  navMenuListItem.textContent = menuText[i];
}
let navRight = createElement("div", container, navRightAttr, navRightStyle);
let navSearch = createElement("input", navRight, navSearchAttr, navSearchStyle);
let navSignin = createElement(
  "button",
  navRight,
  navSigninAttr,
  navSigninStyle
);
let navSignup = createElement(
  "button",
  navRight,
  navSignupAttr,
  navSignupStyle
);

// using .textContent to add the text for the created elements
navSignin.textContent = "Sign in";
navSignup.textContent = "Sign up";
let navIcon = createElement("img", navRight, navIconAttr, navIconStyle);

//& ============== github navbar JS ===================

//& ============== Password generator elements ===================

let main = createElement("main", root, {}, mainStyle);
let mainContainer = createElement("div", main, containerAttr, containerStyle);
let mainBox = createElement("div", mainContainer, mainBoxAttr, mainBoxStyle);
let passwordHeading = createElement(
  "h1",
  mainBox,
  passwordHeadingAttr,
  passwordHeadingStyle
);
passwordHeading.textContent = "Generate password";
let passwordInput = createElement(
  "input",
  mainBox,
  passwordInputAttr,
  passwordInputStyle
);
let passwordBtn = createElement(
  "div",
  mainBox,
  passwordBtnAttr,
  passwordBtnStyle
);
passwordBtn.textContent = "Generate Password";
//& ============== Password generator elements ===================

//& ==================== password generator logic ======================

const passwordBox = document.querySelector(".passwordInput"); // input tag
console.log(passwordBox);
const passwordLength = 16; // length of passowrd
const passBtn = document.querySelector(".passwordBtn"); // button tag

// variables containing all the characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-=[]{}|;:',.<>?/`";
// all characters stored in a single variable
const allChar = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  //* password which is an empty string is updated with a random value form all 4 of the variable containing characters, makeing the length of the password to 4.
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  //* this loops the code to add a random character to password until it reaches passwordLength which is 16, hence now password legth is 16 consisting of all characters
  while (passwordLength > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  return password;
};

passBtn.addEventListener("click", () => {
  // adding the value of password ( form the createPassword() function) to passwordBox which is the input tag
  passwordBox.value = createPassword();
});

//& ==================== password generator logic ======================
