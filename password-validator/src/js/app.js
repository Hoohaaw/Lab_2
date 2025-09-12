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