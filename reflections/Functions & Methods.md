# Methods and Functions Overview

| Method/function name        | Code | Amount of rows (without white lines) | Reflection |
|-----------------------------|-------|--------------------------------------|-------------|
| **passwordStrength**        | [code](#passwordstrength-code) | 18 | Breaks conventions from Clean Code, but it was hard to refactor without making it unreadable. Uses many inline conditionals to add to score. |
| **getListOfSequentialLetters** | [code](#getlistofsequentialletters-code) | 33 | Array broken into sections for readability. Technically could be one line, but readability is prioritized. |
| **constructor(config = {})** | [code](#constructor-code) | 9 | Creates instances inside the constructor. Raises questions about whether constructors should follow the same "shortness" rules as functions. |
| **validateLength**          | [code](#validatelength-code) | 7 | Triad function (3 arguments). Normally discouraged, but works well here due to clear argument names. |
| **loadConfig**              | [code](#loadconfig-code) | 11 | Uses multiple libraries. Slightly harder to read but placing try/catch inline keeps context clear. |

---

## Code Blocks

### passwordStrength Code
```js
passwordStrength(password, username) {
  const score = 0;
  if (this.validateString(password) === true) {
    score += 1;
  }
  if (this.validateLength(password, this.NumberRange.getMinRange(), this.NumberRange.getMaxRange()) === true) {
    score += 1;
  }
  if (this.containsUppercase(password) === true) {
    score += 1;
  }
  if (this.containsLowercase(password) === true) {
    score += 1;
  }
  if (this.containsDigit(password) === true) {
    score += 1;
  }
  if (this.containsSpecialChar(password) === true) {
    score += 1;
  }
  if (this.doesNotContainWhitespace(password) === true) {
    score += 1;
  }
  if (this.containsSameCharacter(password) === true) {
    score += 1;
  }
  if (this.passwordEqualToUsername(password, username) === true) {
    score += 1;
  }
  if (this.passwordIsBlacklisted(password) === true) {
    score += 1;
  }
  if (this.passwordContainsSequenceLetters(password) === true) {
    score += 1;
  }
  return score;
}
```
### getListOfSequentialLetters Code
```js
getListOfSequentialLetters() {
  return [
    "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij",
    "klmn", "klmno", "klmnop", "klmnopq", "klmnopqr", "klmnopqrs", "klmnopqrst",
    "wxyz",
    "dcba", "edcba", "fedcba", "gfedcba",
    "zyxw", "zyxwv", "zyxwvu", "zyxwvut",
    "1234", "12345", "123456", "1234567", "12345678", "123456789",
    "2345", "3456", "4567", "5678", "6789",
    "4321", "54321", "654321", "7654321", "87654321", "987654321",
    "qwer", "qwert", "qwerty",
    "asdf", "asdfg", "asdfgh",
    "zxcv", "zxcvb",
    "poiuy", "lkjhg", "mnbv",
  ];
}
```

### constructor Code
```js
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
```

### validateLength Code
```js
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
```

### loadConfig Code
```js
async function loadConfig() {
  const configPath = path.resolve(process.cwd(), "password-validator.config.js");
  if (fs.existsSync(configPath)) {
    try {
      const fileConfig = await import(pathToFileURL(configPath).href);
      return fileConfig.default || fileConfig;
    } catch (err) {
      console.warn("Could not load password-validator.config.js:", err);
    }
  }
  return {};
}
```
