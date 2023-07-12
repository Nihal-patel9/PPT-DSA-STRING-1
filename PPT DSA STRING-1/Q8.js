function multiplySparseMatrices(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;

  const res = new Array(m);
  for (let i = 0; i < m; i++) {
    res[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < k; j++) {
      if (mat1[i][j] !== 0) {
        for (let l = 0; l < n; l++) {
          if (mat2[j][l] !== 0) {
            res[i][l] += mat1[i][j] * mat2[j][l];
          }
        }
      }
    }
  }

  return res;
}

// Example usage
const mat1 = [
  [1, 0, 0],
  [-1, 0, 3],
];
const mat2 = [
  [7, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];

const result = multiplySparseMatrices(mat1, mat2);
console.log(result);