class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map=new Map();

        let res=[];

        for(let n of nums){

            if(map.has(n)){

                map.set(n,map.get(n)+1)
            }
            else{

                map.set(n,1)
            }
        }

        //console.log(map)

        const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);
        
        console.log(sortedEntries)
        for(let i = 0; i < k; i++){
            res.push(sortedEntries[i][0]);
        }

        return res;
    }
}