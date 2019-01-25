# Description:
The generic implementation of the fibonacci algorithm is usually something like the following:
```javascript
function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}
```

Now thats all and well and good but that function isn't too efficient. If I wanted to get the 1000th number in the series, I'd have to wait... days? maybe years?

## Task:
Write a more efficient fibonacci function that can calculate the 1000th+ number series without breaking a sweat. Read up on **tail call optimization** for some help.

### Starting values:
```javascript
fib(0) = 0;
fib(1) = 1;
```