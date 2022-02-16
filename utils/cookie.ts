// TODO write all the cookie related functions
// GET COOKIE
// SET COOKIE
// DELETE COOKIE

const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value};`;
};

const getCookie = (name: string) => {
  // return document.cookie
  // return document.cookie.split(';');
};

export { setCookie, getCookie };
