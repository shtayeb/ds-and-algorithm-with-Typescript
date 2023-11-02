function bubbleSort(array){

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[i] < array[j]){
                const tmp = array[i]
                array[i] = array[j];
                array[j] = tmp
            }
        }
    }

    return array
}

// let arr1 = [3,27,38,43]
// let arr2 = [9,10,82]

// let res = bubbleSort([...arr1,...arr2])

// console.log(res)


// sucks when the leftArray finishes first
// function merge(leftArr,rightArr){
//     const result = []
//     let j = 0

//     for (let i = 0; i <= leftArr.length+1; i++) {
//         for (j; j < rightArr.length; j++) {
//             if (leftArr[i] <= rightArr[j]) {
//                 result.push(leftArr[i]);
//                 break;
//             }else{
//                 result.push(rightArr[j])
//             }
//         }
//     }

//     return result
// }

// let res = merge([3], [,7]);

// console.log(res)

// // with while
function merge(left, right) {
    let sortedArr = []; // the sorted items will go here
    while (left.length && right.length) {
        // Insert the smallest item into sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];
}

// let res = merge([3], [8,7]);

// console.log(res)

function mergeSort(arr){
    if(arr.length === 1) return arr

    const midpoint = Math.floor(arr.length / 2);
    
    const lSorted = mergeSort(arr.slice(0,midpoint))
    const rSorted = mergeSort(arr.slice(midpoint))

    // return bubbleSort([...lSorted,...rSorted]);
    return merge(lSorted,rSorted);
}

const list = [9, 3, 7, 4, 69, 420, 42];


const res2 = mergeSort([3, 5, 8, 5, 99,1]) // [1, 3, 5, 5, 8, 99]
console.log(res2)