class Blacklist {
  constructor() {
    this.blacklist = this.getBlacklist();
  }

  /**
 * Returns an array of blacklisted passwords.
 * @returns {string[]} Array of blacklisted password strings.
 */
  getBlacklist() {
    return [
      "Admin",
      "Password",
      "User",
    ];
  };

  addToBlacklist(string) {
    this.blacklist.push(string);
  }
}

export default Blacklist;
