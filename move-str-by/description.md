# Description:
Inspired by [Move 10](https://www.codewars.com/kata/move-10/javascript).

## Task:
Create a function that will return a function that will forward a string by `n` letters through the alphabet.

## Input:
A number `n` such that `n <= 26 && n >= -26`

## Example:
```javascript
const moveTwo = moveStrBy(2);
console.log(moveTwo('hI')); // 'jK'
console.log(moveTwo('bYe')); // 'dAg'
```

## Notes:
Do _not_ alter characters that aren't alphabetical.