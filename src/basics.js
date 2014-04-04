/**
 * This is a file for very basics algoritms
 */


/**
 * This is a factor decomposition function for agiven number
 * Complexity: O(n)
 * @param  {Integre} number the number to be decomposited
 * @return {Array} Array of factors
 */
function factors(number) {

    if (factors.cache && factors.cache[number])
        return factors.cache[number];

    var _factors = [];

    for (var i = 0; i <= number; i++) {
        if (number % i === 0) {
            _factors.push(i);
        }
    }

    factors.cache = factors.cache || {};
    factors.cache[number] = _factors;

    return _factors;

}
module.exports.factors = factors;


/**
 * This function returns the min value by given array
 * Complexity: O(n)
 * @return {Integer} minimun number of an array
 */
function minArgument() {

    var _min = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
        if (_min > arguments[i]) {
            _min = arguments[i];
        }
    }
    return _min;
}
module.exports.minArgument = minArgument;

/**
 * Returns the min value given an array
 * @return {Integer} min value of a given array
 */
function minOfArray(array) {
    return minArgument.apply(this, array);
}
module.exports.minOfArray = minOfArray;