//& styles as in objects which are then given
//&  as function parameter for createELement
export const navStyle = {
  "background-color": "#25292e",
  height: "80px",
  color: "#c8c9ca",
  display: "flex",
  "align-items": "center",
};
export const containerStyle = {
  padding: "auto",
  display: "flex",
  height: "inherit",
  width: "90%",
  margin: "auto",
  color: "#c8c9ca",
  "align-items": "center",
  "justify-content": "space-between",
};

export const navLeftStyle = {
  display: "flex",
  "align-items": "center",
};

export const navLogoStyle = {
  width: "80px",
};

export const navMenuStyle = {
  "list-style": "none",
  display: "flex",
  "align-items": "center",
  gap: "10px",
};

export const navMenuListStyle = {
  "list-style": "none",
  padding: "2px 5px",
};

export const navMenuListItemStyle = {
  "text-decoration": "none",
  color: "#c8c9ca",
  cursor: "pointer",
  "font-family": "'Mona Sans', sans-serif",
  "font-size": "1.1rem",
  "font-weight": "500",
};

export const navRightStyle = {
  display: "flex",
  "align-items": "center",
  "justify-content": "flex-end",
};

export const navSearchStyle = {
  border: "0.5px solid #c8c9ca",
  "box-shadow": "white 0.2px 0.3px 3px",
  "border-radius": "4px",
  padding: "10px 11px",
  "background-color": "#25292E",
  width: "300px",
  color: "#c8c9ca",
  "font-weight": "600",
  "font-family": "'Mona Sans', sans-serif",
};

export const navSigninStyle = {
  padding: "7px 13px",
  border: "none",
  color: "#c8c9ca",
  cursor: "pointer",
  "font-family": "'Mona Sans', sans-serif",
  "font-size": "1.1rem",
  "font-weight": "500",
  "background-color": "#25292E",
  margin: "0px 10px",
};
export const navSignupStyle = {
  border: "1px solid #dbdcddff",
  "border-radius": "4px",
  padding: "7px 13px",
  color: "#c8c9ca",
  cursor: "pointer",
  "font-family": "'Mona Sans', sans-serif",
  "font-size": "1.1rem",
  "font-weight": "500",
  "background-color": "#25292E",
  margin: "0px 10px 0px 0px",
};

export const navIconStyle = {
  width: "45px",
};

export const mainStyle = {
  height: "100vh",
};

export const mainBoxStyle = {
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "flex-direction": "column",
  margin: "auto",
  border: "4px solid #50C878",
  padding: "65px 35px",
  "border-radius": "48px",
  //   "background-color": "#212121",
  "background-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%2350c878' fill-opacity='0.3'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
};

export const passwordHeadingStyle = {
  "font-family": "'Mona Sans', sans-serif",
  color: "#50C878",
  "font-size": "36px",
  "letter-spacing": "1.5px",
  margin: "0px 0px 25px 0px",
  "text-shadow": "0 0 32px #50C878, 0 0 8px rgba(80, 200, 120, 0.6)",
};
export const passwordInputStyle = {
  "font-family": "'Mona Sans', sans-serif",
  border: "none",
  outline: "none",
  padding: "12px 14px",
  width: "345px",
  "border-radius": "5px",
  "font-size": "20px",
};

export const passwordBtnStyle = {
  "font-family": "'Mona Sans', sans-serif",
  border: "none",
  outline: "none",
  padding: "12px 14px",
  width: "345px",
  "border-radius": "5px",
  "font-size": "20px",
  "background-color": "#27ae60",
  color: "black",
  "font-weight": "600",
  "text-align": "center",
  margin: "14px 0px 0px 0px",
  cursor: "pointer",
};

//& attributes as in objects which are then
//& given as function parameter for createELement

export const navAttr = {
  class: "nav",
  id: "navbar",
};
export const containerAttr = {
  class: "container",
};

export const navLeftAttr = {
  class: "navLeft",
};

export const navLogoAttr = {
  src: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png",
  class: "navLogo",
};

export const navMenuAttr = {
  class: "navMenu",
};

export const navMenuListAttr = {
  class: "navMenuList",
};

export const navMenuListItemAttr = {
  class: "navMenuListItem",
  href: "#",
};

export const navRightAttr = {
  class: "navRight",
};

export const navSearchAttr = {
  class: "navSearch",
  type: "search",
  placeholder: "Search or jump to...",
};

export const navSigninAttr = {
  class: "navSignin",
};

export const navSignupAttr = {
  class: "navSignup",
};

export const navIconAttr = {
  class: "navIcon",
  src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4HXbLm66mW9xaT9oqI0bEIqeQkK30ZgLeg7uhrY5V-Nfb-xQf ",
};
export const mainBoxAttr = {
  class: "mainBox",
};

export const passwordHeadingAttr = {
  class: "passwordHeading",
};

export const passwordInputAttr = {
  class: "passwordInput",
  type: "text",
  placeholder: "A7f!qP9#tL2@xV6%",
};

export const passwordBtnAttr = {
  class: "passwordBtn",
};
