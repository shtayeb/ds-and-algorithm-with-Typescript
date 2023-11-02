function linearSearch(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return i;
    }
  }
  return -1;
}

// let found = linearSearch([3, 4, 67, 1, 7, 9], 1);
// let found2 = linearSearch([3, 4, 67, 1, 7, 9], 234);
// console.log(found);
// console.log(found2);

function binarySearchRecursive(start, end, haystack, needle) {
  if (end <= start) {
    return false;
  }

  const pivot = Math.floor(start + (end - start) / 2);

  if (haystack[pivot] === needle) {
    return true;
  }

  if (haystack[pivot] > needle) {
    return binarySearchRecursive(start, pivot, haystack, needle);
  } else {
    return binarySearchRecursive(pivot + 1, end, haystack, needle);
  }
}
// const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

// let found3 = binarySearchRecursive(0, arr.length, arr, 4);
// let found3 = binarySearchRecursive(0, arr.length, arr, 1336);
// let found3 = binarySearchRecursive(0, arr.length, arr, 1);
// let found3 = binarySearchRecursive(0, arr.length, arr, 0);
// console.log(found3);

function binarySearchIterative(haystack, needle) {
  let low = 0;
  let high = haystack.length;

  while (low < high) {
    const midpoint = Math.floor(start + (end - start) / 2);
    const value = haystack[midpoint];

    if (value === needle) {
      return true;
    } else if (value > needle) {
      high = midpoint;
    } else {
      low = midpoint + 1;
    }
  }
  return false;
}
