/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
    https://leetcode.com/problems/merge-strings-alternately/description/
 */
var mergeAlternately = function(word1, word2) {
    let len = word1.length >= word2.length ? word1.length : word2.length;
    let ans = "";
    for (let i = 0; i<len; i++) {
       ans += (word1[i] || '') + (word2[i] || '');
    }
    return ans;
};
