import PasswordValidator from "../src/app";

const validator = new PasswordValidator(); 



test("validateLength returns true for valid length", () => {
  expect(validator.validateLength("HelloWorld", 5, 15)).toBe(true);
});

test("argument is string", () => {
  expect(validator.validateString("HelloWorld")).toBe(true);
});

test("argument is not string", () => {
  expect(() => {
    validator.validateString(12);
  }).toThrow(TypeError);
});