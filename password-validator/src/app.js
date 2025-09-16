class PasswordValidator {
  constructor() {
    this.validations = [];
  }

  validateString(str) {
    if (typeof str !== "string") {
      throw new TypeError("Input must be a string");
    } else {
      return true;
    }
  }

  validateLength(str, minLength, maxLength) {
    if (!minLength) {
      throw new Error("A number for minLength must be sent as argument");
    }
    if (!maxLength) {
      throw new Error("A number for maxLength must be sent as argument");
    }
    if (str.length < minLength || str.length > maxLength) {
      throw new RangeError(`String length must be between ${minLength} and ${maxLength}`);
    }
    else {
      return true;
    }
  }

  containsUppercase(str) {
    if (str ==! /[A-Z]/.test(str)) {
      throw new Error("String must contain at least one uppercase letter");
    } 
  }

  containsLowercase(str) {
    if (str ==! /[a-z]/.test(str)) {
      throw new Error("String must contain at least one lowercase letter");
    }
  }
  containsDigit(str) {
    if (str ==! /\d/.test(str)) {
      throw new Error("String must contain at least one digit letter");
    }
  }

  containsSpecialChar(str) {
    if (str ==! /[!@#$%^&*(),.?":{}|<>]/.test(str)) {
      throw new Error("String must contain at least one special character");
    }
  }

  doesNotContainWhitespace(str) {
    if (str ==! /\s/.test(str)) {
      throw new Error("String must not contain whitespace characters");
    }
  }

  containsSameCharacter(str) {
    const firstChar = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== firstChar) {
        return;
      }
    }
    throw new Error("String must not contain just one letter");
  }

  passwordEqualToUsername(password, username) {
    if (!username) {
      throw new Error("Username must be sent as argument");
    }
    if (password === username) {
      throw new Error("Password must not be equal to username");
    }
  }
}

export default PasswordValidator;