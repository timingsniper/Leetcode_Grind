/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [];
    left[0] = 1;
    let right = [0];
    let ans = [];

    for (let i = 1; i<nums.length; i++) {
        left[i] = left[i-1]*nums[i-1];
        right.push(0);
    }
    right[nums.length-1] = 1;

    for(let i = nums.length-2; i>=0; i--) {
        right[i] = right[i+1]*nums[i+1];
    }

    for (let i = 0; i<nums.length; i++) {
        if(i == 0) {
            ans.push(right[0])
        }
        else if (i == nums.length-1){
            ans.push(left[nums.length-1])
        }
        else{
            ans.push(left[i]*right[i])
        }
    }
    // 1 1 2 6
    // 24 12 4 1
    return ans;

};
