// returns the element at the given position (
const getNthElement = (index, array) => {
  if (index < array.length) {
    return array[index];
  }
};

// returns the sum of the numbers in the array
const sumNumbers = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  return sum;
};

// returns the array elements as a comma-seperated string
const arrayToCSVString = array => {
  return array.join(",");
};

// converts the csv string as an array
const csvStringToArray = string => {
  return string.split(",");
};

// adds the item to the end of the array
const addToArray = (element, array) => {
  array.push(element);
};

// returns a new array with the value appended
const addToArray2 = (element, array) => {
  array.concat(element);
  // .concat() won't modify the original array, unlike .push()
};

// removes the element at position n
const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

// converts every number in the array to a string
const numbersToStrings = numbers => {
  return numbers.toString().split(",");
};

// makes every string in the array uppercase
const uppercaseWordsInArray = strings => {
  return strings.map(element => {
    return element.toUpperCase();
  });
};

// reverses every string in an array
const reverseWordsInArray = strings => {
  return strings.map(element => {
    return element
      .split("")
      .reverse()
      .join("");
  });
};

// filters the array and only returns even numbers
const onlyEven = numbers => {
  return numbers.filter(num => {
    return num % 2 === 0;
  });
};

// returns the string with the space characters removed
const removeSpaces = string => {
  // const newArr = string.split("");

  // newArr.map(elem => {
  //   return elem !== " ";
  // });
  // return newArr.join("");
  return string.replace(/\s+/gi, "");
};

// returns an array with the nth element removed, and does not mutate the original
const removeNthElement2 = (index, array) => {

};

// returns elements starting with a vowel
const elementsStartingWithAVowel = strings => {

};

// sorts the string by the last character
const sortByLastLetter = strings => {

};

module.exports = {
  sumNumbers,
  arrayToCSVString,
  removeSpaces,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  getNthElement,
  sortByLastLetter
};
