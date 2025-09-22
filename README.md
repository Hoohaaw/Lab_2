<h2>Password Validator</h2>
A lightweight JavaScript library for validating passwords against common security rules.  
The validator checks string type, length, character requirements, blacklist membership, and more.

<h2>Student project disclaimer</h2>
This is a project made entirely made by me, Alex Palm, for the university course 1DV610 at Linneuniversitetet. This is a disclaimer because of that fact. If you were to use this library, use it with caution. However feel free to let me know if there are improvements to be made through the available communication channels here.

<h2>Install</h2>
* NPM PACKAGE TO BE IMPLEMENTED *

<h2>Usage/code example</h2>
* WILL BE ADDED LATER *

<h2>Rules in validator</h2>

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


<h2>Bugs/feedback</h2>
* List off known bugs to be aware off *

<h2>Testing/coverage</h2>
Automatic testing is done with the Jest framework. As off 09-22 (This will be version later, e.g 1.33.7) the application has 100% coverage

<h2>Roadmap</h2>
- Allow custom validation rules
- Support multiple errors at once instead of failing on the first
- Add configuration options (e.g., set custom min/max length)

<h2>License</h2>
MIT License. See LICENSE for details
