export class numberRange {
  constructor(minStrRange = 6, maxStrRange = 80) {
    this._minStrRange = minStrRange;
    this._maxStrRange = maxStrRange;
  }

  setMinRange(number) {
    number = minStrRange;
  }

  setMaxRange(number) {
    number = minStrRange;
  }

  getMinRange() {
    return this._minStrRange;
  }

  getMaxRange() {
    return this._maxStrRange;
  }
}
