class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {
     

    let n = arr.length;
    let result = [];

    // Sort the array
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {

        // Skip duplicate values for i
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = n - 1;

        while (j < k) {

            let sum = arr[i] + arr[j] + arr[k];

            if (sum < 0) {
                j++;
            }

            else if (sum > 0) {
                k--;
            }

            else {

                result.push([arr[i], arr[j], arr[k]]);

                j++;
                k--;

                // Skip duplicates for j
                while (j < k && arr[j] === arr[j - 1]) {
                    j++;
                }

                // Skip duplicates for k
                while (j < k && arr[k] === arr[k + 1]) {
                    k--;
                }
            }
        }
    }

    return result;


    }
}
