#! /usr/bin/env node

let cnt = 0;
while (cnt < 20) {
  cnt++;
  if (cnt % 3 === 0 && cnt % 5 === 0) {
    console.log("FizzBuzz");
  } else if (cnt % 3 === 0) {
    console.log("Fizz");
  } else if (cnt % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(cnt);
  }
}
