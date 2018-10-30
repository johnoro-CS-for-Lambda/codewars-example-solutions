const isNarcissistic = n => {
  const nums = String(n).split('');
  const sum =  nums.reduce((acc, digit) => {
    return acc + Math.pow(digit, nums.length);
  }, 0);
  return sum === n;
};
