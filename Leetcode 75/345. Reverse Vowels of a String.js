/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description
 */
var reverseVowels = function(s) {
    let ans = [...s];
    let vowelPos = [];
    let vowels = [];
    let vowelDict = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];

    for (let i = 0; i<s.length; i++) {
        if (vowelDict.includes(s[i])) {
            vowelPos.push(i);
            vowels.push(s[i]);
        }
    }

    let vowelNum = vowelPos.length;
    let reversePos = vowelNum - 1;

    for (let i = 0; i < vowelNum; i++) {
        ans[vowelPos[i]] = vowels[reversePos];
        reversePos--;
    }

    return ans.join('');
};
