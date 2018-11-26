const digital_root = n => {
  if (n < 10) {
    return n;
  }

  const sum = [...n.toString()]
    .reduce((acc, digit) => {
      return acc + Number(digit);
    }, 0);
  
  return sum > 9 ? digital_root(sum) : sum;
};
