
const threeSum = (array) => {
    // Sort the input array in ascending order
    const nums = array.sort((a, b) => a - b);
    const result = []
    const length = array.length;

    for (let i = 0; i < length - 2; i++) {
        if (nums[i] > 0) {
            break
        }

        if (i === 0 || nums[i] !== nums[i - 1]) {

            let low = i + 1, high = length - 1;

            while (low < high) {
                let sum = nums[i] + nums[low] + nums[high];
                if (sum < 0)
                    ++low;
                else if (sum > 0)
                    --high;
                else {
                    result.push([nums[i], nums[low], nums[high]]);
                    ++low;
                    --high;
                    while (low < high && nums[low] === nums[low - 1])
                        ++low;
                    while (low < high && nums[high] === nums[high + 1])
                        --high;
                }
            }
        }
    }
    return result;
}


const args = process.argv.slice(2);
if (args.length > 0) {
    const arrayArg = JSON.parse(args[0]);
    console.log(threeSum(arrayArg));
}

/*
Time complexity#
Let n represent the length of the nums array. Then:
- Sorting the array takes O(nlog(n))
- The nested iteration takes O(n^2),
 where each nums[i] is paired with a two pointer traversal over the remaining elements of the array.
 Therefore, the overall time complexity is O(n^2).

 Space complexity#
Apart from the space used by the built-in sorting algorithm, the algorithm’s space complexity is constant, O(1)

 */