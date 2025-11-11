// JS DOM

import { addInput, addAttributes, addStyles } from "./addElements.js";

//console.log(window.document); // gives the whole html document.
//console.log(window.document.firstChild); // gives the first child of the the html document.
//console.log(document.firstElementChild); // gives the first child which is an element i.e. <html></html>
//console.log(document.firstElementChild.firstElementChild); // give documnt > fChhild > fchild
//console.log(document.firstElementChild.lastElementChild); // give documnt > F-Child > last-child
const body = document.body; // stores the whole html document in the varialble body
const script = document.createElement("script"); //creates an element in the document
const header = document.createElement("header"); //creates an element in the document
body.appendChild(script); // adds the script tag at the end of the body
body.prepend(header); // adds the header tag at the start of the body
// console.log(body);

//console.log(document.forms); // gives all the form tags in the html document
//console.log(
//  document.forms[0] /* we can specify the index to target its respective form*/
//); // gives all the form tags in the html document
console.log(document.links); // gives all the link a tags in the html document

console.log(
  // calling the addInput function with providing its path and the attrbutes as an object and also its styles as an object
  addInput(
    document.forms[0],
    {
      type: "text",
      placeholder: "Enter name",
    },
    {
      width: "200px",
      padding: "8px",
      border: "1px solid #212121",
      borderRadius: "20px",
    }
  )
);
