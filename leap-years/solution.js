const isLeapYear = yr => {
  return (yr % 100 !== 0 && yr % 4 === 0) 
    || yr % 400 === 0;
};
