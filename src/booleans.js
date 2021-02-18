const negate = a => !a;

const both = (a, b) => a && b;

const either = (a, b) => a || b;

const none = (a, b) => !a && !b;

const one = (a, b) => (!a && b) || (a && !b);

const truthiness = a => {
  if (a) {
    return true;
  } else {
    return false;
  }
};

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = a => a % 2 !== 0;

const isEven = a => a % 2 === 0;

const isSquare = a => {
  const sqr = Math.sqrt(a);
  return sqr * sqr === a;
}

const startsWith = (char, string) => {
  return string[0] === char;
};

const containsVowels = string => {
  const lowercaseStr = string.toLowerCase();
  return (
    lowercaseStr.includes("a") ||
    lowercaseStr.includes("e") ||
    lowercaseStr.includes("i") ||
    lowercaseStr.includes("o") ||
    lowercaseStr.includes("u")
  );
};

const isLowerCase = string => {
  for (let i = 0; i < string.length; i += 1) {
    return string[i] === string[i].toLowerCase();
  }
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
