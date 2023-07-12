function findPermutation(s) {
  const n = s.length;
  const perm = new Array(n + 1);
  let low = 0;
  let high = n;

  for (let i = 0; i <= n; i++) {
    if (i === n || s[i] === "I") {
      perm[i] = low++;
    } else {
      perm[i] = high--;
    }
  }

  return perm;
}

const s = "IDID";
const result = findPermutation(s);
console.log(result);