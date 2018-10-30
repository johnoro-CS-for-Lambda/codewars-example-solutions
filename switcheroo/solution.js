const switcheroo = str => str
  .replace(/[ab]/g, char => {
    return char == 'a' ? 'b' : 'a';
  });
