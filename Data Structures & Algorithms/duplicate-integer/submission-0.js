class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let m= new Map();

        for(let n of nums){

            if(m.has(n)){

                return true;
            }

            m.set(n,1)
        }

        return false;
    }
}