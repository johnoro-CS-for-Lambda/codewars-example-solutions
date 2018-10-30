# Explanation:
1. [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) the sentence into an array of words.
2. [`map`]() over that array of words, and if a word is longer than 4 letters:
    1. Split it into an array of characters using [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#94a3).
    1. [`reverse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) it.
    1. [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) it back together into a whole word.

otherwise, just maintain the word (that's less than 5 letters long).

3. Return it [all]!