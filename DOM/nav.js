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
// creating github navbar JS

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
navSignin.textContent = "Sign in";
navSignup.textContent = "Sign up";
let navIcon = createElement("img", navRight, navIconAttr, navIconStyle);
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

//& ==================== password generator ======================

const passwordBox = document.querySelector(".passwordInput");
console.log(passwordBox);
const passwordLength = 16;
const passBtn = document.querySelector(".passwordBtn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-=[]{}|;:',.<>?/`";
const allChar = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (passwordLength > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  return password;
};

passBtn.addEventListener("click", () => {
  // console.log("clicked");
  passwordBox.value = createPassword();
});
