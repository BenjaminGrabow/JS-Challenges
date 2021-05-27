// https://leetcode.com/problems/number-of-good-pairs/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  // Brute force solution
  let good_pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) ++good_pairs;
    }
  }
  return good_pairs;
};
