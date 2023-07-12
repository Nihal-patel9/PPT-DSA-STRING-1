function searchMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    const midVal = matrix[row][col];

    if (midVal === target) {
      return true;
    } else if (midVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
const result = searchMatrix(matrix, target);
console.log(result);