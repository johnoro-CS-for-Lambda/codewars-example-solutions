const maxRot = n => {
  n = n.toString();
  const rots = [ n ];
  for (let i = 0; i < n.length; i++) {
    n = n.slice(0, i) + n.slice(i + 1) + n[i];
    rots.push(n);
  }
  return Math.max(...rots);
};
