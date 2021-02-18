const sayHello = string => {
  return `Hello, ${string}!`;
};

const uppercase = string => {
  return string.toUpperCase();
};

const lowercase = string => {
  return string.toLowerCase();
};

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  return string.slice(0, 1);
};

const firstCharacters = (string, n) => {
  return string.substr(0, n); // substr(start, length)
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
