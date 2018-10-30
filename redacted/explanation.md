# Explanation:
1. If the documents aren't of equal length, then they aren't potentially the same (so return false).
1. Loop through, and if a character isn't equal to another, then check if it's a redacted character. Also note that newline characters (`\n`) are a special case. Newlines cannot be redacted. If a character isn't equal and isn't redacted or is a newline character in the non-redacted document, return false.
1. Return true if the for loop didn't find any discrepancies, as the documents might be the same document (just one being redacted).