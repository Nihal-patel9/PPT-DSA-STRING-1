function findMaxLength(nums) {
  const countMap = { 0: -1 };
  let count = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count--;
    }

    if (count in countMap) {
      const len = i - countMap[count];
      maxLen = Math.max(maxLen, len);
    } else {
      countMap[count] = i;
    }
  }

  return maxLen;
}

const nums = [0, 1];
const result = findMaxLength(nums);
console.log(result);