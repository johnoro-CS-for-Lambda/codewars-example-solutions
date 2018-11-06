# Explanation:
1. We use [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring) for the sake of brevity in regards to the directions (since we have to repeat them).
2. We make an object to store each direction's opposite.
3. We loop through using [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), pushing on directions that aren't a waste (based on the last direction in our result array), and popping directions that are a waste.