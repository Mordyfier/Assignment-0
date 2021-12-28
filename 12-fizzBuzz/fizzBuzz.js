function fizzBuzz(start, end) {
  const fb = [];
  for (let i = start; i <= end; i++) {
    let x = i;
    if (i % 3 == 0) {
      x = "Fizz";
    }
    if (i % 5 == 0) {
      x = "Buzz";
    }
    if (i % 15 == 0) {
      x = "FizzBuzz";
    }
    fb.push(x);
  }
  return fb;
}

// Do not edit this line;
module.exports = fizzBuzz;