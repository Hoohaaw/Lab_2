import Blacklist  from "./blacklist.js";
import NumberRange  from "./numberRange.js";
import loadConfig  from "./loadConfig.js";
import SequentialLetters from "./sequentialLetters.js";

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
    this.SequentialLetters = new SequentialLetters();
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
    this.validations = [];

    this.validations.push({ name: "validateString", result: this.validateString(password) });
    this.validations.push({ name: "validateLength", result: this.validateLength(password, this.NumberRange.getMinRange(), this.NumberRange.getMaxRange()) });
    this.validations.push({ name: "containsUppercase", result: this.containsUppercase(password) });
    this.validations.push({ name: "containsLowercase", result: this.containsLowercase(password) });
    this.validations.push({ name: "containsDigit", result: this.containsDigit(password) });
    this.validations.push({ name: "containsSpecialChar", result: this.containsSpecialChar(password) });
    this.validations.push({ name: "doesNotContainWhitespace", result: this.doesNotContainWhitespace(password) });
    this.validations.push({ name: "containsSameCharacter", result: this.containsSameCharacter(password) });
    this.validations.push({ name: "passwordEqualToUsername", result: this.passwordEqualToUsername(password, username) });
    this.validations.push({ name: "passwordIsBlacklisted", result: this.passwordIsBlacklisted(password) });
    this.validations.push({ name: "passwordContainsSequenceLetters", result: this.passwordContainsSequenceLetters(password) });

    return true;
  }

  sendValidationResult(result) {
    const array = [];
    this.validations.push(result);
  }

  /**
     * Checks if input is a string.
     * @param {*} str - The value to check.
     * @returns {boolean} True if input is a string.
     * @throws {TypeError} If input is not a string.
     */
  validateString(str) {
    if (typeof str !== "string") {
      return false;
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
      return false;
    }
    if (str.length < minLength || str.length > maxLength) {
      return false;
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
      return false;
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
      return false;
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
      return false;
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
      return false;
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
      return false;
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
    return false;
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
      return false;
    }
    if (password === username) {
      return false;
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
      return false;
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
    if (this.SequentialLetters.getListOfSequentialLetters(str).includes(str)) {
      return false;
    } else {
      return true;
    }
  }
}

export default PasswordValidator;
