# Explanation:
- Firstly, we [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) the string of digits into an array of digits.
- Secondly, we [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) that array into a sum of each digit raised to the power of the number of digits.
- Lastly, we return the expression `sum === n`, which will evaluate to a [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean).