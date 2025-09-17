import PasswordValidator from "../src/app";

const validator = new PasswordValidator(); 

// Test validateString method
test("argument is string", () => {
  expect(validator.validateString("HelloWorld")).toBe(true);
});

test("argument is not string", () => {
  expect(() => {
    validator.validateString(1337);
  }).toThrow(TypeError);
});

// Test validateLength method
test("validateLength returns true for valid length", () => {
  expect(validator.validateLength("HelloWorld", 5, 15)).toBe(true);
});

test("validateLength throws RangeError for invalid length", () => {
  expect(() => {
    validator.validateLength("Hi", 5, 15);
  }).toThrow(RangeError);
});

test("validateLength throws Error if minLength is not provided", () => {
  expect(() => {
    validator.validateLength("HelloWorld", null, 15);
  }).toThrow(Error);
});
test("validateLength throws Error if maxLength is not provided", () => {
  expect(() => {
    validator.validateLength("HelloWorld", 5, null);
  }).toThrow(Error);
});


