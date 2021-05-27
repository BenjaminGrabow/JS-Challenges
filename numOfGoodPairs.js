// https://leetcode.com/problems/number-of-good-pairs/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  // Brute force solution, time complexity O(n^2)
  let good_pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) ++good_pairs;
    }
  }
  return good_pairs;
};

// better solution, time complexity O(n)
var numIdenticalPairs = function (nums) {
  let good_pairs = 0;

  const trackNumsObject = {};

  for (let i = 0; i < nums.length; i++) {
    if (trackNumsObject[nums[i]]) {
      good_pairs += trackNumsObject[nums[i]];
      trackNumsObject[nums[i]] += 1;
    } else {
      trackNumsObject[nums[i]] = 1;
    }
  }

  return good_pairs;
};
