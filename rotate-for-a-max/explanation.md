# Explanation:
1. Populate the `rots` array with the first [string] number.
2. Slice each current number up, from index 0 up to the current index (and not including it), and then everything from the index after that to the end, and then the number at the current index, jumping one index closer to the end each time, until the we've done that `n - 1` times (so that we have `n` combinations).
3. Push those values onto our array as well!
4. Use the [`max`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) method to return the largest number. This'll coerce our number string into an actual number as well.

Note that during step #2, if our index is out of range, the [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) method takes care of that for us (by returning an empty string).