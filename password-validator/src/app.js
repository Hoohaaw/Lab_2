import  Blacklist  from "./blacklist.js";
import  NumberRange  from "./numberRange.js";
import  loadConfig  from "./loadConfig.js";
import sequentialLetters
  from "./sequentialLetters.js";

class PasswordValidator {

  /**
     * Creates a new PasswordValidator instance.
     */
  constructor(config = {}) {
    this.validations = [];
    this.config = config;
    this.blacklist = new Blacklist(
      config.blacklist || []
    );
    this.NumberRange = new NumberRange(
      config.minLength || 6,
      config.maxLength || 80
    );
    this.sequentialLetters = new sequentialLetters();
  }

  /**
   * Loads configuration from password-validator.config.js and returns a PasswordValidator instance.
   * @returns {Promise<PasswordValidator>} A promise that resolves to a PasswordValidator instance.
   */
  static async loadConfig() {
    const config = await loadConfig();
    return new PasswordValidator(config);
  }

  /**
   * Returns the current minimum password length.
   * @returns {number} The minimum password length.
   */
  getMinLength() {
    return this.NumberRange.getMinRange();
  }

  /**
   * Returns the current maximum password length.
   * @returns {number} The maximum password length.
   */
  getMaxLength() {
    return this.NumberRange.getMaxRange();
  }

  /**
     * Sets the minimum password length for validation.
     * @param {number} min - The minimum length to set.
     */
  setMinLength(min) {
    this.NumberRange.setMinRange(min);
  }

  /**
     * Sets the maximum password length for validation.
     * @param {number} max - The maximum length to set.
     */
  setMaxLength(max) {
    this.NumberRange.setMaxRange(max);
  }

  /**
   * Returns the current blacklist of disallowed passwords.
   * @returns {string[]} The array of blacklisted password strings.
   */
  getBlacklist() {
    return this.blacklist.blacklist;
  }

  /**
     * Validates a password against multiple rules.
     * @param {string} password - The password to validate.
     * @param {string} username - The username to compare against.
     * @returns {boolean} True if password passes all validations.
     * @throws {Error|TypeError|RangeError} If any validation fails.
     */
  validate(password, username) {
    this.validateString(password);
    this.validateLength(password, this.NumberRange.getMinRange(), this.NumberRange.getMaxRange());
    this.containsUppercase(password);
    this.containsLowercase(password);
    this.containsDigit(password);
    this.containsSpecialChar(password);
    this.doesNotContainWhitespace(password);
    this.containsSameCharacter(password);
    this.passwordEqualToUsername(password, username);
    this.passwordIsBlacklisted(password);
    this.passwordContainsSequenceLetters(password);
    return true;
  }

  /**
     * Checks if input is a string.
     * @param {*} str - The value to check.
     * @returns {boolean} True if input is a string.
     * @throws {TypeError} If input is not a string.
     */
  validateString(str) {
    if (typeof str !== "string") {
      throw new TypeError("Input must be a string");
    } else {
      return true;
    }
  }

  /**
     * Validates the length of a string.
     * @param {string} str - The string to check.
     * @param {number} minLength - Minimum allowed length.
     * @param {number} maxLength - Maximum allowed length.
     * @returns {boolean} True if string length is valid.
     * @throws {Error|RangeError} If arguments are missing or length is invalid.
     */
  validateLength(str, minLength, maxLength) {
    if (!minLength || !maxLength) {
      throw new Error("A number must be sent as argument for min and max length");
    }
    if (str.length < minLength || str.length > maxLength) {
      throw new RangeError(`String length must be between ${minLength} and ${maxLength}`);
    } else {
      return true;
    }
  }

  /**
     * Checks if string contains at least one uppercase letter.
     * @param {string} str - The string to check.
     * @returns {boolean} True if string contains uppercase.
     * @throws {Error} If no uppercase letter is found.
     */
  containsUppercase(str) {
    if (!/[A-Z]/.test(str)) {
      throw new Error("String must contain at least one uppercase letter");
    } else {
      return true;
    }
  }

  /**
     * Checks if string contains at least one lowercase letter.
     * @param {string} str - The string to check.
     * @returns {boolean} True if string contains lowercase.
     * @throws {Error} If no lowercase letter is found.
     */
  containsLowercase(str) {
    if (!/[a-z]/.test(str)) {
      throw new Error("String must contain at least one lowercase letter");
    } else {
      return true;
    }
  }

  /**
     * Checks if string contains at least one digit.
     * @param {string} str - The string to check.
     * @returns {boolean} True if string contains a digit.
     * @throws {Error} If no digit is found.
     */
  containsDigit(str) {
    if (!/\d/.test(str)) {
      throw new Error("String must contain at least one digit letter");
    } else {
      return true;
    }
  }

  /**
     * Checks if string contains at least one special character.
     * @param {string} str - The string to check.
     * @returns {boolean} True if string contains a special character.
     * @throws {Error} If no special character is found.
     */
  containsSpecialChar(str) {
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(str)) {
      throw new Error("String must contain at least one special character");
    } else {
      return true;
    }
  }

  /**
     * Checks if string does not contain whitespace characters.
     * @param {string} str - The string to check.
     * @returns {boolean} True if no whitespace is found.
     * @throws {Error} If whitespace is found.
     */
  doesNotContainWhitespace(str) {
    if (/\s/.test(str)) {
      throw new Error("String must not contain whitespace characters");
    } else {
      return true;
    }
  }

  /**
     * Checks if string does not consist of only one repeated character.
     * @param {string} str - The string to check.
     * @returns {boolean} True if string contains more than one unique character.
     * @throws {Error} If all characters are the same.
     */
  containsSameCharacter(str) {
    const firstChar = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== firstChar) {
        return true;
      }
    }
    throw new Error("String must not contain just one letter");
  }

  /**
     * Checks if password is not equal to username.
     * @param {string} password - The password to check.
     * @param {string} username - The username to compare against.
     * @returns {boolean} True if password is not equal to username.
     * @throws {Error} If username is missing or password equals username.
     */
  passwordEqualToUsername(password, username) {
    if (!username) {
      throw new Error("Username must be sent as argument");
    }
    if (password === username) {
      throw new Error("Password must not be equal to username");
    }  else {
      return true;
    }
  }

  /**
     * Checks if password is not blacklisted.
     * @param {string} str - The password to check.
     * @returns {boolean} True if password is not blacklisted.
     * @throws {Error} If password is blacklisted.
     */
  passwordIsBlacklisted(str) {
    if(this.blacklist.getBlacklist().includes(str)) {
      throw new Error("Password is blacklisted");
    } else {
      return true;
    }
  }

  /**
     * Checks if password is not blacklisted.
     * @param {string} str - The password to check.
     * @returns {boolean} True if password is not in sequence.
     * @throws {Error} If password is in list of sequence.
     */
  passwordContainsSequenceLetters(str) {
    if (this.sequentialLetters.getListOfSequentialLetters(str).includes(str)) {
      throw new Error("Password contains sequential letters");
    } else {
      return true;
    }
  }
}

export default PasswordValidator;
