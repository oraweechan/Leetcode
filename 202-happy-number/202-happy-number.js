/**
 * @param {number} n
 * @return {boolean}
 */

function numSquareSum(n) {
    let squareSum =0;
    while (n!=0) {
        squareSum += (n % 10) * (n % 10);
        n = parseInt(n/10)
    }
    return squareSum;
}

var isHappy = function(n) {
    let st = new Set();
    while(1) {
        n = numSquareSum(n);
        if (n == 1) return true;
        if (st.has(n)) return false;
        st.add(n);
    }
};