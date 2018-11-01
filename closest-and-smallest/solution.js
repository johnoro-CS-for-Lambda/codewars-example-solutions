const closest = str => {
  const numbers = str.split(' ');
  const sumDigits = num => num
    .split('')
    .reduce((acc, curr) => acc + +curr, 0);
  
  const weights = numbers
    .map((num, ind) => [ sumDigits(num), ind, +num ])
    .sort((a, b) => {
      const weightDiff = a[0] - b[0];
      if (weightDiff !== 0) {
        return weightDiff;
      }
      // smaller indexes first if weights are equal
      return a[1] - b[1];
    });
  
  let min = Number.MAX_SAFE_INTEGER;
  let mostClose = [];
  
  for (let i = 1; i < weights.length; i++) {
    const [ prev, curr ] = weights.slice(i - 1, i + 1);
    const diff = curr[0] - prev[0];
    if (diff < min) {
      min = diff;
      mostClose = [ prev, curr ];
    }
  }
  
  return mostClose;
};
