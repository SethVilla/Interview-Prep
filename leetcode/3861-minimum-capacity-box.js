// 3861. Minimum Capacity Box

/*

You are given a list of boxes, each with a capacity and an item size.
You need to find the minimum index of the box that can hold the item.
If no box can hold the item, return -1.
*/

/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function(capacity, itemSize) {
    let index = -1
    for (let i = 0; i < capacity.length; i++) {

        if (capacity[i] >= itemSize && (capacity[i] < capacity[index] || index === -1)) {
            index = i
            if (capacity[i] === itemSize) return index
        }

    }
    return index
    
};

console.log(minimumIndex([1, 2, 3, 4, 5], 3))

