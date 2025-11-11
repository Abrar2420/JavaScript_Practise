let addAttributes = (element, attributes) => {
  // this loop will run ones for every key in the object
  for (let key in attributes) {
    // we have the attribute name as key and now we are getting its value
    let value = attributes[key];

    // we are appling the attribute name and attribute value to the element
    element.setAttribute(key, value);
  }
};

let addStyles = (element, styles) => {
  for (let key in styles) {
    element.style[key] = styles[key]; // this does (element.style.color = "red")  basically, uses [] instead of .
  }
};

function addInput(path, attributes, styles) {
  let input = document.createElement("input");

  // here we are calling the addAttributes function and giving the element name the attributes object
  addAttributes(input, attributes);
  addStyles(input, styles);

  // will append the input element at the path privided
  path.appendChild(input);

  return input;
}

export { addInput, addAttributes, addStyles };
