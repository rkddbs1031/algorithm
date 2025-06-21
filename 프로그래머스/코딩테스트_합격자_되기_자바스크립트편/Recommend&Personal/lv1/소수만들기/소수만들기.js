function isPrime(sum) {
  if (sum < 2) return false;

  for (let i = 2; i <= Math.sqrt(sum); i++) {
    if (sum % i === 0) return false;
  }

  return true;
}

function solution(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) count++;
      }
    }
  }

  return count;
}
