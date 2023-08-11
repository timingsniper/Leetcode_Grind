/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstNum = Number.MAX_VALUE;
    let secondNum = Number.MAX_VALUE;

    for(let i = 0; i<nums.length; i++) {
        if(nums[i] <= firstNum) {
            firstNum = nums[i];
        }
        else if (nums[i] <= secondNum) {
            secondNum = nums[i];
        }
        else {
            return true;
        }
    }
    return false;
};
