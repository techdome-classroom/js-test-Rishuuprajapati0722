function isMatch(message, pattern) {
  const m = message.length;
  const p = pattern.length;
  
  // Create a 2D array dp where dp[i][j] means whether message[0...i-1] matches pattern[0...j-1]
  const dp = Array(m + 1).fill(false).map(() => Array(p + 1).fill(false));
  
  // Base case: Empty pattern matches empty message
  dp[0][0] = true;
  
  // Fill the first row for patterns with *
  for (let j = 1; j <= p; j++) {
      if (pattern[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }
  
  // Fill the dp table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= p; j++) {
          if (pattern[j - 1] === '*') {
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          } else if (pattern[j - 1] === '?' || pattern[j - 1] === message[i - 1]) {
              dp[i][j] = dp[i - 1][j - 1];
          }
      }
  }
  
  return dp[m][p];
}

// Test cases
console.log(isMatch("aa", "a")); // Output: false
console.log(isMatch("aa", "*")); // Output: true
console.log(isMatch("cb", "?a")); // Output: false
console.log(isMatch("adceb", "*a*b")); // Output: true
console.log(isMatch("acdcb", "a*c?b")); // Output: false
