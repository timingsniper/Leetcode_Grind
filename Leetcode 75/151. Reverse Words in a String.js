/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.split(" ");
    ans = ""
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] != ""){
            ans += str[i] + " "
        }
    }
    return ans.trim();
};
