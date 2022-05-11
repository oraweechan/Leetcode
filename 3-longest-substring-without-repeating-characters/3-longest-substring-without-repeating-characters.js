/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seen = {}, left = 0, longest = 0;
    for (let right=0; right<s.length; right++) {
        let currentChar = s[right];
        let prevChar = seen[currentChar];
        if (prevChar >= left) {
            left = prevChar + 1;
        }
        seen[currentChar] = right;
        longest = Math.max(longest, right-left+1)
    }
    return longest;

    
};