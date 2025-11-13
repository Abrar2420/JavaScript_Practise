import { createElement } from "./elements.js";
import { navStyle, navAttr, containerStyle, containerAttr } from "./styles.js";
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
const nav = createElement("nav", root, navAttr, navStyle);
const container = createElement("div", nav, containerAttr, containerStyle);
