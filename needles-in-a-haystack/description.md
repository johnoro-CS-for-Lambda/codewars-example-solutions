# Description:
Find the needle(s) in a haystack by creating a function that returns all properties (recursively) which contains the needle (string).

Return value should be a sorted array.

## Example:

```javascript
var obj = {
  site: "Codewars",
  description: "Lorem ipsum dolor sit...",
  obj2: {
    str: "Yeah, Codewars!",
    num: 123,
    obj3: {
      something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff"
    }
  }
};
var results = search(obj, "Codewars"); // results = ["obj2.obj3.something", "obj2.str", "site"]
```