function findOriginalArray(changed) {
  const freqMap = new Map();

  for (const num of changed) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const original = [];

  for (const num of changed) {
    if (freqMap.get(num) > 0) {
      freqMap.set(num, freqMap.get(num) - 1);
      const doubleNum = 2 * num;
      if (freqMap.get(doubleNum) > 0) {
        freqMap.set(doubleNum, freqMap.get(doubleNum) - 1);
        original.push(num);
      } else {
        return [];
      }
    }
  }

  return original;
}

const changed = [1, 3, 4, 2, 6, 8];
const result = findOriginalArray(changed);
console.log(result);