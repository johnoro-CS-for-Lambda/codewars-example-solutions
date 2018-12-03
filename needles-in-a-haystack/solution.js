const search = (haystack, needle) => {
  let arr = [];
    
  if (haystack) {
    arr = Object.keys(haystack)
      .reduce((res, key) => {
        const val = haystack[key];
        if (typeof val == 'object') {
          search(val, needle)
            .forEach(subKey => {
              res.push(`${key}.${subKey}`);
            });
        } else if (typeof val == 'string') {
          if (val.includes(needle)) {
            res.push(key);
          }
        }
        return res;
      }, []);
  }
  
  return arr.sort();
};
