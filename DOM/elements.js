export const addStyle = (element, style) => {
  let formatStyle = "";
  for (let key in style) {
    formatStyle += `${key}: ${style[key]}; `;
  }
  element.setAttribute("style", formatStyle);
};

export const addAttributes = (element, attributes) => {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

export const createElement = (tag, path, attribute, styles) => {
  let newELement = document.createElement(tag);

  addAttributes(newELement, attribute);
  addStyle(newELement, styles);
  path.appendChild(newELement);

  return newELement;
};
