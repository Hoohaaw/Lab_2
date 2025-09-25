class Blacklist {
  constructor() {}

  /**
 * Returns an array of blacklisted passwords.
 * @returns {string[]} Array of blacklisted password strings.
 */
  getBlackList() {
    return [
      "Admin",
      "Password",
      "User",
    ];
  };
}

export default Blacklist;
