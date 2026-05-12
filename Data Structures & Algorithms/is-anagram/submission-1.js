class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let freq1={},freq2={};

        let l1=s.length,l2=t.length;

        if(l1 != l2){

            return false
        }

        for(let i=0;i<l1;i++){

            if(freq1[s[i]]){
                freq1[s[i]]=freq1[s[i]]+1
            }
            else{
                freq1[s[i]]=1
            }
              if(freq2[t[i]]){
                freq2[t[i]]=freq2[t[i]]+1
            }
            else{
                freq2[t[i]]=1
            }
        }

        let keys=Object.keys(freq2);

        for(let k of keys){
            if(freq1[k]!= freq2[k]){
                return false;
            }

        }

        return true;
    }
}
