class NumberRange {
  constructor(minStrRange, maxStrRange) {
    this._minStrRange = minStrRange;
    this._maxStrRange = maxStrRange;
  }

  setMinRange(_number) {
    this._minStrRange = _number;
  }

  setMaxRange(_number) {
    this._maxStrRange = _number;
  }

  getMinRange() {
    return this._minStrRange;
  }

  getMaxRange() {
    return this._maxStrRange;
  }
}

export default NumberRange;