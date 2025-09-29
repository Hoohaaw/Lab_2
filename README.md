## Password Validator ## 
A lightweight JavaScript library for validating passwords against common security rules.  
The validator checks string type, length, character requirements, blacklist, and more.

[![npm version](https://img.shields.io/npm/v/password-validator-ap.svg)](https://www.npmjs.com/package/password-validator-ap)
[![npm downloads](https://img.shields.io/npm/dt/password-validator-ap.svg)](https://www.npmjs.com/package/password-validator-ap)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## Student project disclaimer ##
This is a project made entirely by me, Alex Palm, for the university course 1DV610 at Linneuniversitetet. This is a disclaimer because of that fact. If you were to use this library, use it with caution. However feel free to let me know if there are improvements to be made through the available communication channels here.

## Table of Contents
- [Install](#install)
- [Usage](#usagecode-examples)
- [API](#api)
- [Rules](#rules-in-validator)
- [Testing](#testingcoverage)
- [Roadmap](#roadmap)
- [License](#license)

## Install ## 
npm install password-validator-ap

## Usage/code examples ## 

## Basic usage (no config file): ##

```js
import PasswordValidator from "password-validator-ap";

const validator = new PasswordValidator(); 
validator.setMinLength(6) // Set the minimum length of the password
validator.setMaxLength(80) // Set the maximum length of the password

try {
	validator.validate("MyPassword123!", "myusername");
	console.log("Password is valid!");
} catch (err) {
	console.error("Validation error:", err.message);
}
```

# Usage with config file (async): #

```js
import PasswordValidator from "password-validator-ap";

(async () => {
	const validator = await PasswordValidator.loadConfig(); // Loads the config file if present
	try {
		validator.validate("MyPassword123!", "myusername"); // Send arguments for validation
		console.log("Password is valid!");
	} catch (err) {
		console.error("Validation error:", err.message);
	}
})();
```

# Checking min/max range and blacklist: #

```js
console.log("Min length:", validator.getMinLength()); // get set minimum length for valid password
console.log("Max length:", validator.getMaxLength()); // get set maximum length for valid password
console.log("Blacklist:", validator.getBlacklist()); // get list of blacklisted passwords
```

# Example of config file #
<password-validator.config.js>
```js
export default {
  minLength: 66,
  maxLength: 99,
  blacklist: ["password", "admin", "abc123"], // Add strings to be blacklisted or import array with strings
};
```

## API ##

# Constructor #
```js
new PasswordValidator(config = {})
```
Creates a new instance.
- <code>config</code> (object, optional): Configuration object. Supports <code>minLength</code>, <code>maxLength</code>, and <code>blacklist</code>.

<b>static async loadConfig()</b>
Loads configuration from <code>password-validator.config.js</code> and returns a <code>PasswordValidator</code> instance.
- <b>Returns:</b> <code>Promise&lt;PasswordValidator&gt;</code>

<b>validate(password, username)</b>
Validates a password against all rules.
- <code>password</code> (string): The password to validate.
- <code>username</code> (string): The username to compare against.
- <b>Returns:</b> <code>boolean</code> (true if valid)
- <b>Throws:</b> <code>Error</code>, <code>TypeError</code>, or <code>RangeError</code> if validation fails.

<b>setMinLength(min)</b>
Sets the minimum password length.
- <code>min</code> (number): Minimum length.

<b>setMaxLength(max)</b>
Sets the maximum password length.
- <code>max</code> (number): Maximum length.

<b>getMinLength()</b>
Returns the current minimum password length.
- <b>Returns:</b> <code>number</code>

<b>getMaxLength()</b>
Returns the current maximum password length.
- <b>Returns:</b> <code>number</code>

<b>getBlacklist()</b>
Returns the current blacklist of disallowed passwords.
- <b>Returns:</b> <code>string[]</code>

<b>Validation Methods (Advanced Usage)</b>
You can use these methods directly for custom validation flows:
- <code>validateString(str)</code> — Throws if not a string.
- <code>validateLength(str, minLength, maxLength)</code> — Throws if length is invalid.
- <code>containsUppercase(str)</code> — Throws if no uppercase letter.
- <code>containsLowercase(str)</code> — Throws if no lowercase letter.
- <code>containsDigit(str)</code> — Throws if no digit.
- <code>containsSpecialChar(str)</code> — Throws if no special character.
- <code>doesNotContainWhitespace(str)</code> — Throws if whitespace is present.
- <code>containsSameCharacter(str)</code> — Throws if all characters are the same.
- <code>passwordEqualToUsername(password, username)</code> — Throws if password equals username.
- <code>passwordIsBlacklisted(str)</code> — Throws if password is blacklisted.


## Rules in validator ##

| Rule                   | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| String type            | Password must be a string value. Throws an error if not a string.           |
| Length check           | Password length must be between **6 and 80 characters**.                    |
| Uppercase requirement  | Password must contain **at least one uppercase letter (A–Z)**.              |
| Lowercase requirement  | Password must contain **at least one lowercase letter (a–z)**.              |
| Digit requirement      | Password must contain **at least one digit (0–9)**.                         |
| Special character      | Password must contain **at least one special character** (e.g. `!@#$%^&*`). |
| Whitespace restriction | Password must **not contain whitespace** (spaces, tabs, newlines).          |
| Unique characters      | Password must not consist of just a **single repeated character**.          |
| Not equal to username  | Password must not be the same as the provided username.                     |
| Blacklist restriction  | Password must not appear in the configured **blacklist of common passwords**.|


## Bugs/feedback ## 
* List off known bugs to be aware off *
To send feedback on this library, such as constructive feedback and points of improvement, create a issue on the Github page:
<br>
https://github.com/Hoohaaw/Lab_2.git
<br>

## Testing/coverage ## 
Automatic testing is done with the Jest framework. As off version 1.0.1 the application has 100% coverage. 

## Roadmap ## 
- Allow custom validation rules
- Support multiple errors at once instead of failing on the first
- Add configuration options (e.g., set custom min/max length)

## License ## 
MIT License. See [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
 for details
