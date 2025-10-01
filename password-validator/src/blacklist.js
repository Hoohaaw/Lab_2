class Blacklist {
  constructor(blacklist = []) {
    const defaultBlacklist = [
      "Admin",
      "Password",
      "User",
    ];
    this._blacklist = [...new Set([...defaultBlacklist, ...blacklist])];
  }

  /**
 * Returns an array of blacklisted passwords.
 * @returns {string[]} Array of blacklisted password strings.
 */
  getBlacklist() {
    return this._blacklist;
  };

  addToBlacklist(string) {
    if(!this._blacklist.includes(string)) {
      this._blacklist.push(string);
    }
  }

  removeFromBlacklist(string) {
    this._blacklist = this._blacklist.filter(item => item !== string);
  }
}

export default Blacklist;
