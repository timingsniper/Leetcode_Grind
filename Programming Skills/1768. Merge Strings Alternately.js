/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
   https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=programming-skills
 */
var mergeAlternately = function(word1, word2) {
    let len = word1.length >= word2.length ? word1.length : word2.length;
    let ans = "";
    for (let i = 0; i<len; i++) {
        if(i < word1.length) {
            ans += word1[i];
        }
        if(i < word2.length) {
            ans += word2[i];
        }
    }
    return ans;
};
