# Explanation:
I'll try to skip some of the less important details for the sake of brevity.
1. Map through the numbers to put them into the appropriate format for return (`[ weight, index, number ]`).
1. Sort these by ascending weight, and by index if weights are equal.
1. Loop through the weights, comparing each pair's weight as you go through (and these are all you need to compare since it's sorted). If weights (the current weight and the `min`) are equal, the first (earlier in the original string of numbers) will be returned (since we use `<` and not `<=` in our comparison).