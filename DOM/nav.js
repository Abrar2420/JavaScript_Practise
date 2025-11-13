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
