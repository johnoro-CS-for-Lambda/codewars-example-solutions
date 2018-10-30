const findNextSquare = sq => {
  const rt = Math.sqrt(sq);
  if (Number.isInteger(rt)) {
    return sq + rt * 2 + 1;
  }
  return -1;
};
