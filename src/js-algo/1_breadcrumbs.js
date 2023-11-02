// O(n^2)
function isUnique(arr) {
  let result = false;

  for (let i = 0; i < arr.length; i++) {
    // Outer Loop

    for (let j = 0; j < arr.length; j++) {
      // Inner Loop

      if (i !== j && arr[i] === arr[j]) {
        result = false;
        break;
      }
    }
  }

  return result;
}

// O(n)
function isUniqueBetter(arr) {
  const breadcrumbs = {};
  let result = false;

  for (let i = 0; i < arr.length; i++) {
    if (breadcrumbs[arr[i]]) {
      result = false;
      break;
    } else {
      breadcrumbs[arr[i]] = true;
    }
  }

  return result;
}

function uniqueSort(arr) {
  const breadcrumbs = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // if element exist in the breadcrumbs we dont push it in the result
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }

  return result.sort((a, b) => a - b);
}
