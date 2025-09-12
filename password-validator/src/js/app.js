function validateString(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
}

function validateLength(str, minLength, maxLength) {
  if (str.length < minLength || str.length > maxLength) {
    throw new RangeError(`String length must be between ${minLength} and ${maxLength}`);
  }
}

function containsUppercase(str) {
  if (str ==! /[A-Z]/.test(str)) {
    throw new Error("String must contain at least one uppercase letter");
  }
    
}

function containsLowercase(str) {
  if (str ==! /[a-z]/.test(str)) {
    throw new Error("String must contain at least one lowercase letter");
  }
}
function containsDigit(str) {
  if (str ==! /\d/.test(str)) {
    throw new Error("String must contain at least one digit letter");
  }
}

function containsSpecialChar(str) {
  if (str ==! /[!@#$%^&*(),.?":{}|<>]/.test(str)) {
    throw new Error("String must contain at least one special character");
  }
}

function doesNotContainWhitespace(str) {
  if (str ==! /\s/.test(str)) {
    throw new Error("String must not contain whitespace characters");
  }
}

function containsSameCharacter(str) {
  const firstChar = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== firstChar) {
      return;
    }
  }
  throw new Error("String must not contain just one letter");
}