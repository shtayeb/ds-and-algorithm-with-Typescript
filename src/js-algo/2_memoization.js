"use strict";

// ======== Memoization
// In memoization you trade space for time
// It takes too much space but runs faster
function times10(n) {
  return n * 10;
}

const cache = {};

function memoizTimes10(n) {
  if (cache[n]) {
    console.log(`From Cache: ${cache[n]}`);
    return cache[n];
  }

  let result = times10(n);
  console.log(`Calculated: ${result}`);
  cache[n] = times10(n);

  return result;
}

// memoizTimes10(9); // calculated
// memoizTimes10(9); // cached

// ==== Memoization with Closure
// This is to avoid polution of global scope

function memoizedClosureTimes10() {
  const cache = {};
  return function (n) {
    if (cache[n]) {
      console.log(`Closure From Cache: ${cache[n]}`);
      return cache[n];
    }

    let result = times10(n);
    console.log(`Closure Calculated: ${result}`);
    cache[n] = times10(n);

    return result;
  };
}

const memoClosureTimes10 = memoizedClosureTimes10();

try {
  // console.log(memoClosureTimes10(8)); // calculated
  // console.log(memoClosureTimes10(9)); // calculated
  // console.log(memoClosureTimes10(8)); // cached
} catch (error) {
  console.log(error);
}

// ===== Generic memoization
/**
 *
 * @param {Function} cb
 * @returns {Function}
 */
function memoizeGeneric(cb) {
  const cache = {};
  return function (n) {
    if (cache[n]) {
      console.log(`Generic From Cache: ${cache[n]}`);
      return cache[n];
    }

    let result = cb(n);
    console.log(`Generic Calculated: ${result}`);
    cache[n] = cb(n);

    return result;
  };
}

const memoGenericTimes10 = memoizeGeneric((n) => n * 10);
const memoGenericTimes20 = memoizeGeneric((n) => n * 20);

try {
  console.log(memoGenericTimes10(8)); // calculated
  console.log(memoGenericTimes10(9)); // calculated
  console.log(memoGenericTimes10(8)); // cached

  console.log(memoGenericTimes20(2));
  console.log(memoGenericTimes20(2));
} catch (error) {
  console.log(error);
}
