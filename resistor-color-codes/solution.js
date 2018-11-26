const decodeResistorColors = bands => {
  bands = bands.split(' ')
    .map(color => {
      return {
        black: 0, brown: 1, red: 2, orange: 3,
        yellow: 4, green: 5, blue: 6,
        violet: 7, gray: 8, white: 9,
        gold: 5, silver: 10
      }[color];
    });
  let [ first, second, pow, tol = 20 ] = bands;
  let ohms = String(`${first}${second}` * 10 ** pow);
  if (ohms >= 1000000) {
    ohms = calcDecStr(ohms, 6) + 'M';
  }
  else if (ohms >= 1000) {
    ohms = calcDecStr(ohms, 3) + 'k';
  }
  return `${ohms} ohms, ${tol}%`;
};

const calcDecStr = (s, place) => {
  const dec = s[1];
  const n = s.slice(0, s.length - place);
  return `${n > 9 ? n : n + (dec > 0 ? '.' + dec : '')}`;
};
