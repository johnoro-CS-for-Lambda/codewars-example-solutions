# Explanation:
The main bit of this problem to follow is inside of our `if` statement.

1. We use the static [`keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) method to get an array of our keys.
2. We use [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) to get through our array of keys. Note that we start with an empty array.
3. If a value is an object, then we recurse by calling our search method on it. For each string in our array returned by our call, we chain it to our current key (this'll chain nested keys as far as they go so long as the computer doesn't crash).
4. If a value is instead a string, then check if it includes our needle string, and then append it to our accumulator if it does!
5. This eventually leads us to having our properties listed that include the string (and the structure down to them, if they're nested)!