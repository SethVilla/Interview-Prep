// O(n) time complexity
// O(n) space complexity
// Because we know the array is sorted we can use the shift method to remove the first element of the array, and when one of the arrays is empty we can just add the other array to the merged array.
// this item is not in place, because we are creating a new array. It also modifies the original arrays.
const mergeSortedArrays = (arr1, arr2) => {
    const mergedArray = []; // O(1)
    while (arr1.length && arr2.length) { // O(n)
        if (arr1[0] < arr2[0]) {
            mergedArray.push(arr1.shift()); // O(1)
        } else {
            mergedArray.push(arr2.shift()); // O(1)
        }
    }
    return [...mergedArray, ...arr1, ...arr2]; // O(n)
}

// O(n) time complexity
// O(n) space complexity
// Because we know the array is sorted we can use the while loop to add the elements to the merged array.
// this item is in place, because we are not creating a new array. It also modifies the original arrays.
    const mergeSortedArrays2 = (arr1, arr2) => { // O(n)
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
    const mergedArray = []; // O(1)
    let i = 0; // O(1)
    let j = 0;
    while (i < arr1.length && j < arr2.length) { // O(n)
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]); // O(1)
            i++;
        } else {
            mergedArray.push(arr2[j]); // O(1)
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]); // O(1)
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]); // O(1)
        j++;
    }
    return [...mergedArray]; // O(n)
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));