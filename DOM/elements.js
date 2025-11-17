//& all the functions for creating elemenst, adding styles / attributes etc.

export const addStyle = (element, style) => {
  let formatStyle = "";
  for (let key in style) {
    // does the formating for the value for setAttribute
    // the key and object[key] are assigned to formatStyle
    formatStyle += `${key}: ${style[key]}; `; // takes the key and value form the object provided
  }
  // sets the style on the new element created
  element.setAttribute("style", formatStyle);
};

export const addAttributes = (element, attributes) => {
  for (let key in attributes) {
    // sets attribute on the new element created,
    element.setAttribute(key, attributes[key]); // takes the key and value form the object provided
  }
};

export const createElement = (tag, path, attribute, styles) => {
  let newELement = document.createElement(tag); // creating a new element and storing it

  addAttributes(newELement, attribute); // calling addAttributes funciton
  addStyle(newELement, styles); // calling addStyle funciton
  path.appendChild(newELement); // appending the element to the path provided

  return newELement; // returns the new element with all the styles and attributes
};
