/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
   https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxVal = Math.max.apply(Math, candies);
    let ans = [];
    for (let i = 0; i < candies.length; i++){
        ans.push(candies[i]+extraCandies >= maxVal);
    }
    return ans;
};
