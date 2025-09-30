class SequentialLetters {
  constructor() {
    this.sequentialLetters = this.getListOfSequentialLetters();
  }
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
}

export default SequentialLetters;
