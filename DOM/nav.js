import { createElement } from "./elements.js";
import { navStyle, navAttr } from "./styles.js";
// creating github navbar JS

const root = document.querySelector(".root");
// console.log(root);

console.log(createElement("nav", root, navAttr, navStyle));
