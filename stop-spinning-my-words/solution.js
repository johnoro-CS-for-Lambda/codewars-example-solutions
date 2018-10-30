const spinWords = sentence => {
  return sentence.split(' ')
    .map(word => word.length > 4 
      ? [...word].reverse().join('') 
      : word)
    .join(' ');
};
