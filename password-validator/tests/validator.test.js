import PasswordValidator from "../src/app";
import Blacklist from "../src/blacklist.js";
import NumberRange from "../src/numberRange.js";
import SequentialLetters from "../src/sequentialLetters.js";

const validator = new PasswordValidator();

// Test validateString method
test("argument is string", () => {
  expect(validator.validateString("HelloWorld")).toBe(true);
});

test("validateString returns false if argument is not a string", () => {
  expect(validator.validateString(1337)).toBe(false);
});

// Test validateLength method
test("validateLength returns true for valid length", () => {
  expect(validator.validateLength("HelloWorld", 5, 15)).toBe(true);
});

test("validateLength returns false if length is shorter than min", () => {
  expect(validator.validateLength("Hi", 5, 15)).toBe(false);
});

test("validateLength returns false if minLength is not provided", () => {
  expect(validator.validateLength("HelloWorld", null, 15)).toBe(false);
});

test("validateLength returns false if maxLength is not provided", () => {
  expect(validator.validateLength("HelloWorld", 5, null)).toBe(false);
});

// Test containsUppercase method
test("containsUppercase returns true if string contains uppercase", () => {
  expect(validator.containsUppercase("HelloWorld")).toBe(true);
});

test("containsUppercase returns false if string has no uppercase", () => {
  expect(validator.containsUppercase("helloworld")).toBe(false);
});

// Test containsLowercase method
test("containsLowercase returns true if string contains lowercase", () => {
  expect(validator.containsLowercase("HelloWorld")).toBe(true);
});

test("containsLowercase returns false if string has no lowercase", () => {
  expect(validator.containsLowercase("HELLOWORLD")).toBe(false);
});

// Test containsDigit method
test("containsDigit returns true if string contains digit", () => {
  expect(validator.containsDigit("HelloWorld1")).toBe(true);
});

test("containsDigit returns false if string has no digits", () => {
  expect(validator.containsDigit("HelloWorld")).toBe(false);
});

// Test containsSpecialChar method
test("containsSpecialChar returns true if string contains special character", () => {
  expect(validator.containsSpecialChar("Hello@World")).toBe(true);
});

test("containsSpecialChar returns false if string has no special character", () => {
  expect(validator.containsSpecialChar("HelloWorld")).toBe(false);
});

// Test doesNotContainWhitespace method
test("doesNotContainWhitespace returns true if string has no whitespace", () => {
  expect(validator.doesNotContainWhitespace("HelloWorld")).toBe(true);
});

test("doesNotContainWhitespace returns false if string has whitespace", () => {
  expect(validator.doesNotContainWhitespace("Hello World")).toBe(false);
});

// Test containsSameCharacter method
test("containsSameCharacter returns true if string has multiple unique chars", () => {
  expect(validator.containsSameCharacter("HelloWorld")).toBe(true);
});

test("containsSameCharacter returns false if all characters are the same", () => {
  expect(validator.containsSameCharacter("AAAAAA")).toBe(false);
});

// Test passwordEqualToUsername method
test("passwordEqualToUsername returns false if no username provided", () => {
  expect(validator.passwordEqualToUsername("Password123", null)).toBe(false);
});

test("passwordEqualToUsername returns true if password and username differ", () => {
  expect(validator.passwordEqualToUsername("Password123", "Username")).toBe(true);
});

test("passwordEqualToUsername returns false if password equals username", () => {
  expect(validator.passwordEqualToUsername("Username", "Username")).toBe(false);
});

// Test passwordIsBlacklisted method
test("passwordIsBlacklisted returns true if password is not blacklisted", () => {
  expect(validator.passwordIsBlacklisted("Gr33nSk1n123!")).toBe(true);
});

test("passwordIsBlacklisted returns false if password is blacklisted", () => {
  expect(validator.passwordIsBlacklisted("Password")).toBe(false);
});

//
// Blacklist tests
//
test("Blacklist initializes with default values", () => {
  const bl = new Blacklist();
  expect(bl.getBlacklist()).toEqual(expect.arrayContaining(["Admin", "Password", "User"]));
});

test("Blacklist adds new unique items", () => {
  const bl = new Blacklist();
  bl.addToBlacklist("Test123");
  expect(bl.getBlacklist()).toContain("Test123");
});

test("Blacklist does not add duplicates", () => {
  const bl = new Blacklist(["Password"]);
  bl.addToBlacklist("Password");
  const items = bl.getBlacklist().filter(p => p === "Password");
  expect(items.length).toBe(1);
});

//
// NumberRange tests
//
test("NumberRange returns min and max correctly", () => {
  const nr = new NumberRange(5, 10);
  expect(nr.getMinRange()).toBe(5);
  expect(nr.getMaxRange()).toBe(10);
});

test("NumberRange allows updating min and max", () => {
  const nr = new NumberRange(5, 10);
  nr.setMinRange(6);
  nr.setMaxRange(12);
  expect(nr.getMinRange()).toBe(6);
  expect(nr.getMaxRange()).toBe(12);
});

//
// SequentialLetters tests
//
test("SequentialLetters detects sequences like abc", () => {
  const seq = new SequentialLetters();
  const list = seq.getListOfSequentialLetters("abc123");
  expect(list.length).toBeGreaterThan(0);
});

test("SequentialLetters detects sequences in string", () => {
  const seq = new SequentialLetters();
  const list = seq.getListOfSequentialLetters("abcd123");
  expect(list).toEqual(expect.arrayContaining(["abcd", "1234"]));
});
