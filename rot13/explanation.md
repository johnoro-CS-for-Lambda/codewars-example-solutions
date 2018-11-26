# Explanation:
1. We grab the character codes for 'A' and 'a'. This is so we can start from the correct ASCII code depending on whether a character is uppercase or lowercase.
2. We [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) all alphabetical characters using our cipher helper function, which just returns a character that's moved by 13 in the alphabet (specifically, in their [ASCII codes](http://sticksandstones.kstrom.com/appen.html)).
3. Return the new string with its replaced characters, of course!

The regular expression that we use just grabs all uppercase and lowercase letters, a-z (and uses the global flag, `g`, to grab all matches rather than just the first). Another way to write it would be `/[a-z]/gi` or `/[A-Z]/gi`. Note that this leaves other characters unaffected (which is the behavior we want for this problem).