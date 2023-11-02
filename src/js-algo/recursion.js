"use strict";

// ===== Recursion

/**
 * The Call Stack Game
    1. Push called function to stack
    2. Execute function body
    until..
    .....another function is called
        pause the current execution and start at step 1
    .....a return is hit:
        Pop the current function off the stack
        Resume executing the previous function
 */

// ===== Looping with recursion
function loopNTimes(n) {
  console.log("n==", n);

  if (n <= 1) {
    return "complete";
  }

  return loopNTimes(n - 1);
}

// loopNTimes(3);

function recursiveFactorial(num) {
  if (num === 1) {
    return 1;
  }

  console.log(`returning ${num} * recursiveFactorial(${num - 1})`);
  return num * recursiveFactorial(num - 1);
}

// console.log(recursiveFactorial(3));

// ===== Recursion with wrapper function
function wrapperFunctionLoop(start, end) {
  // we are keeping the reference to the start and end variable
  function recurse(i) {
    console.log(`looping from ${start} until ${end}: ${i}`);

    if (i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}

// wrapperFunctionLoop(1, 5);

// ======= Accumulator

// Iterative accumulator
function joinElementsIterative(array, joinString) {
  let joinedString = "";

  for (let i = 0; i < array.length - 1; i++) {
    joinedString += array[i] + joinString;
  }

  return joinedString + array[array.length - 1];
}

console.log(joinElementsIterative(["s", "r", "f"], ","));
