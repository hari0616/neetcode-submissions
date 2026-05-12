class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(h) {


let n = h.length;

let left = 0;
let right = n - 1;

let maxArea = 0;

while (left < right) {

    let w = right - left;

    let height = Math.min(h[left], h[right]);

    let currentArea = w * height;

    maxArea = Math.max(maxArea, currentArea);

    if (h[left] < h[right]) {
        left++;
    } else {
        right--;
    }
}

return maxArea;
    }
}
