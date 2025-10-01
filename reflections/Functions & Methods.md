Validate

PasswordStrength
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
  18
  # Reflection
  The book states that if calls should be probably be function calls. Which might actually be true. Or atleast have some truth to it. However in the case of the passwordStrength function I could not find a way that would not look like an abomination. There is probably a way to solve the issue of adding a score if a return statement is true from multiple functions. But I could not find one actually. 

  In this case, my function breaks most of the conventions described in Chapter three of the Clean code literature. I did not intentionally do this, I wanted my codebase to look better than this. However at this moment I did not find the solution for it. 


getListOfSequentialLetters
```js
  getListOfSequentialLetters() {
    return [
    // Alphabet forward
      "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij",
      "klmn", "klmno", "klmnop", "klmnopq", "klmnopqr", "klmnopqrs", "klmnopqrst",
      "wxyz",

      // Alphabet backward
      "dcba", "edcba", "fedcba", "gfedcba",
      "zyxw", "zyxwv", "zyxwvu", "zyxwvut",

      // Numbers forward
      "1234", "12345", "123456", "1234567", "12345678", "123456789",
      "2345", "3456", "4567", "5678", "6789",

      // Numbers backward
      "4321", "54321", "654321", "7654321", "87654321", "987654321",

      // Common keyboard patterns (QWERTY)
      "qwer", "qwert", "qwerty",
      "asdf", "asdfg", "asdfgh",
      "zxcv", "zxcvb",
      "poiuy", "lkjhg", "mnbv",
    ];
  }
  ```
  33
  # Reflection
  I decided to include this function into this reflection due to the nature of it. It is an array with multiple entries populating it. In JavaScript there is no line limit set for characters. Therefore technically this function could be essentially in one row. But for readability I decided to break up the the array in different "sections". That way its easier to digest/navigate the arrays contents. 

constructor(config = {})
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
9
# Reflection
I decided to include the constructor from my main class. On first glance there are multiple new instances that presumely are being used in the class at some point. However there is really no indication of any use case, just that these things are being initiated. And why this interested me is because if im not mistaken there is nothing in the course literature chapter 3 that talks about the constructor specifically. And with that comes a few questions about what is the best of doing this. Should i maybe have created another "main" class to handle these instances of classes? And then instanciate that class in the real main class? Or is the constructor a type of function that we kinda gloss over and we assume that the things in it are things we need? 

I have not yet decided what I would prefer. It goes against a lot of the "rules" set by the book when it comes to shortness of functions and so on. However are constructors a different beast so to speak? THere is the chance that the main class, which this constructor is apart of, grows even more. And then the constructor grows with it. 

validateLength
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
7
In the course literature triads (three arguments.) are seen as difficult to maintain/handle. Quote from the book: "Functions that take three arguments are significantly harder to understand than dyads (two arguments). Think carefully before creating a triad." However when following the mantra, shorter and even shorter, that the book is portraying for functions it works. And especially in the case of the validate length function. The arguments are named very simply and consise. which makes them easy to work with. But yes, I do recognize that triads are in general something to use only when really necessary. 

loadConfig
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
11
The loadConfig function uses a lot of libraries. fs, path & pathToFileURL. This makes the code incredibly more difficult to understand in my opinion. This function needs introcate comments explaining the different parts. Unless you are familiar with the different libraries used. I personally think this function is difficult but to a acceptable level. The course literature actually believes that the way to improve this code snippet would be to extract the try/catch block. I do in some ways agree. Try/catch blocks can be large and introcate. However in the loadConfig case I do believe it adds readability when everything is placed as close together as they are. I imagine if I were to break out the try/catch block to its own function it would be more difficult to follow. 