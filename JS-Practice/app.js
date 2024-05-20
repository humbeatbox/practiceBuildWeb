// The parameter `fn` will be a function, and `n` a number
function execute(fn, n) {
  // Call the function referred to by the argument (i.e, variable) `fn`, passing `n` as its argument
  return fn(n);
}

// 1. Call the `execute` function, passing an anonymous function, which squares its argument, and the value 3
execute(function(n) {
  return n * n;
}, 3);


// 2. Same thing as above, but with different formatting
execute(function(n) { return n * n;}, 3);

// 3. Same thing as above, using an Arrow Function
execute((n) => n * n, 3);

let doubleIt = function(num) {
  return num * 2;
}

// 4. Again call `execute`, but this time pass `doubleIt` as the function argument
console.log(execute(doubleIt, 3));

tt = 5
console.log(tt);


function a() {
  const hello = 'hello!'

  function b() {
    console.log(hello)
  }
  return b
}
a()() // hello!
