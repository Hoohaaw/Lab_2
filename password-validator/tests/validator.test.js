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

// Test containsUppercase method
test("containsUppercase returns true if string contains uppercase letter", () => {
  expect(validator.containsUppercase("HelloWorld")).toBe(true);
});

test("containsUppercase throws Error if string does not contain uppercase letter", () => {
  expect(() => {
    validator.containsUppercase("helloworld");
  }).toThrow(Error);
});

// Test containsLowercase method
test("containsLowercase returns true if string contains lowercase letter", () => {
  expect(validator.containsLowercase("HelloWorld")).toBe(true);
});

test("containsLowercase throws Error if string does not contain lowercase letter", () => {
  expect(() => {
    validator.containsLowercase("HELLOWORLD");
  }).toThrow(Error);
});

// Test containsDigit method
test("containsDigit returns true if string contains digit", () => {
  expect(validator.containsDigit("HelloWorld1")).toBe(true);
});

test("containsDigit throws Error if string does not contain digit", () => {
  expect(() => {
    validator.containsDigit("HelloWorld");
  }).toThrow(Error);
});

// Test containsSpecialChar method
test("containsSpecialChar returns true if string contains special character", () => {
  expect(validator.containsSpecialChar("Hello@World")).toBe(true);
});

test("containsSpecialChar throws Error if string does not contain special character", () => {
  expect(() => {
    validator.containsSpecialChar("HelloWorld");
  }).toThrow(Error);
});

// Test doesNotContainWhitespace method
test("doesNotContainWhitespace returns true if string does not contain whitespace", () => {
  expect(validator.doesNotContainWhitespace("HelloWorld")).toBe(true);
});

test("doesNotContainWhitespace throws Error if string contains whitespace", () => {
  expect(() => {
    validator.doesNotContainWhitespace("Hello World");
  }).toThrow(Error);
});

// Test containsSameCharacter method
test("containsSameCharacter returns true if string contains different characters", () => {
  expect(validator.containsSameCharacter("HelloWorld")).toBe(true);
});

test("containsSameCharacter throws Error if string contains only one unique character", () => {
  expect(() => {
    validator.containsSameCharacter("AAAAAA");
  }).toThrow(Error);
});

// Test passwordEqualToUsername method
test("passwordEqualToUsername throws Error if no username argument is provided", () => {
  expect(() => validator.passwordEqualToUsername("Password123", null)).toThrow(Error);
});

test("passwordEqualToUsername returns true if password and username are different", () => {
  expect(validator.passwordEqualToUsername("Password123", "Username")).toBe(true);
});

test("passwordEqualToUsername throws Error if password and username are the same", () => {
  expect(() => {
    validator.passwordEqualToUsername("Username", "Username");
  }).toThrow(Error);
});

// Test passwordIsBlacklisted method
test("passwordIsBlacklisted returns true if password is not blacklisted", () => {
  expect(validator.passwordIsBlacklisted("Gr33nSk1n123!")).toBe(true);
});

test("passwordIsBlacklisted throws Error is password is blacklisted", () => {
  expect(() => {
    validator.passwordIsBlacklisted("Password");
  }).toThrow(Error);
});

