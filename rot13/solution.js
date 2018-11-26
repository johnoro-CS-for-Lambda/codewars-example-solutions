const rot13 = msg => {
  const ACode = 'A'.charCodeAt(0);
  const aCode = 'a'.charCodeAt(0);
  return msg
    .replace(/[A-Za-z]/g, ch => (
      ch.toLowerCase() === ch 
        ? cipher(ch, aCode)
        : cipher(ch, ACode)
    ));
};

const cipher = (ch, from, n = 13) => {
  return String
    .fromCharCode(
      from + 
      (ch.charCodeAt(0) - from + n) % 26
    );
};
